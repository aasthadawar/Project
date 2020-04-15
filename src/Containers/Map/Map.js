import React, { Component } from 'react';

import axios from 'axios';

import { VectorMap } from "react-jvectormap"

class Map extends Component {
    state={
        loading:false
    }
    newObj={};
    componentDidMount(){
        axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200')
        .then(response=>{
            var countryData = response.data.data.rows;
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
            if(this.state.loading==true){
                var map = (<VectorMap
                    map={"world_mill"}
                    backgroundColor="#B9DBFB " //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                    width: "100%",
                    height: "520px"
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
                <div>
                    {map}
                </div>
                );
        }
};
    


export default Map;