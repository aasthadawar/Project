import React, { Component } from 'react';

import axios from 'axios';

import { VectorMap } from "react-jvectormap";
import styles from '../Map/Map.module.css';
import zoom from '../../assests/images/zoom.png';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import CountryMap from '../Map/CountryMap/CountryMap';


class Map extends Component {
    state={
        loading:false
    }
    newObj={};
    async componentDidMount(){
        var newCountryData;
let result = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=1')
   .then(response=>{
       newCountryData = response.data.data.rows;
       //var updatedArray = this.state.countryArray.concat(countryData);
      // this.setState({...this.state,countryArray:updatedArray})
   })
   .catch(error=>{
       console.log('error is',error)
   })
       let newResult = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=2')
        .then(response=>{
            var newData = response.data.data.rows
            var countryData = newData.concat(newCountryData);
            console.log('country',countryData)
            
            countryData.map(items=>{
                if(items.country_abbreviation!=""){
                    this.newObj[items.country_abbreviation]= parseInt(items.total_cases.split(',').join(''))
                }
            })
            console.log('new obj',this.newObj);
            this.setState({...this.state,loading:true})
        })
        .catch(error=>{
            console.log('error is',error)
        })
    }
    handleClick = (e, countryCode) => {
        console.log(countryCode);
        };
        render(){
            if(this.state.loading==false){
                var spinner = (<Spinner/>)
            }
            if(this.props.countriesData.length!==0){
                console.log('%%%%%%%%%map props');
                this.props.countriesData.map(items=>{
                    if(items.country_abbreviation!=""){
                        this.newObj[items.country_abbreviation]= parseInt(items.total_cases.split(',').join(''))
                    }
                })
            }
            if(this.state.loading==true){
                var map = (<VectorMap  
                    map={"world_mill"}
                    backgroundColor="#FBF6F6 " //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                    width: "100%",
                    height: "360px"
                    }}
                    // onRegionClick={handleClick} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                    initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 0
                    },
                    hover: {
                    "fill-opacity": 0.8,
                    cursor: "pointer"
                    },
                    /*selected: {
                    fill: "#2938bc" //color for the clicked country
                    },*/
                    selectedHover: {}
                    }}
                    /*regionsSelectable={true}*/
                    series={{
                    regions: [
                    {
                    values: this.newObj, //this is your data
                    scale: ["#FFC4C6","#FF0019"], //your color game's here
                    normalizeFunction: "polynomial"
                    }
                    ]
                    }}
                    />)
            }
            return (
                <div className={styles.main}>
                    <div className={styles.sub}>
                        <CountryMap/>
                        {spinner}
                        <div className={styles.vector}>{map}</div>
                    </div>
                </div>
                );
        }
};

const mapStateToProps=(state)=>{
    //console.log('map',state.cou.countries);
    return{
        countriesData:state.cou.countries
    }
}

export default connect(mapStateToProps)(Map);
    