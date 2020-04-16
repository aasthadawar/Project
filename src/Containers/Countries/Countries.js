import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { initCountriesDetails } from '../../store/Actions/CountriesActions';
import Country from '../../Components/Country/Country';
import styles from '../Countries/Countries.module.css';
import axios from 'axios';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Countries extends PureComponent{
    constructor(){
        super();
        this.country=[];
        this.state={
            filterArray:[],
            countryArray:[],
            loading:false
        }
    }
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
       // console.log('after await',result);
         let newResult = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=2')
        .then(response=>{
            var newUpdatedArray = response.data.data.rows;
            var countryData = newUpdatedArray.concat(newCountryData);
            var updatedArray = this.state.countryArray.concat(countryData);
            console.log('updated array',updatedArray);
            this.setState({...this.state,countryArray:updatedArray,loading:true})
        })
        .catch(error=>{
            console.log('error is',error)
        })
        //console.log('after await2',newResult);
        this.props.onShowCountriesDetails();
    }

    onSearchHandler=(event)=>{
            var value=event.target.value;
            //console.log('value',value);
            var formattedValue = value.toLowerCase();
           // console.log('formatted value',formattedValue);
            //console.log('change country',this.country);
            var arr = this.country.filter(items=>items.country.toLowerCase().includes(formattedValue))
            //console.log('filter array',this.filterArray)
            this.setState({...this.state,...this.state.filterArray,filterArray:arr})
    }

    render(){
        if(this.state.loading==false){
            var spinner = (<Spinner/>)
        }
       if(this.state.countryArray.length!=0){

           console.log('@@@@@@@@@@@@@@@@@@@@render',this.state.countryArray);
          this.country=[]
           if(this.props.countriesData.length!=0){
               this.country=[]
               
               this.country=this.props.countriesData;
           }

           else{
               
            this.country=this.state.countryArray;
           }
            
            var search=(
                <div className={styles.Search}>
                    <div className={styles.Icon}><input onChange={()=>this.onSearchHandler(window.event)} type="text" placeholder="search locarion "></input></div>
                </div>
            )
            var counter=0;

            if(this.state.filterArray.length==0){
                var countryData = (
        
                    this.country.map(items=>{
                        counter++;
                        return(
                         <Country key={counter} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/>
                        );
                    }))
            }
            else{
                var countryData = (
                    <ul >
                    {this.state.filterArray.map(items=>{
                        return(
                         <li className={styles.li}><Country key={items.country} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/></li>
                        );
                    })}
                </ul>
                )
            }

            

       }
        
        return(
            <div className={styles.Countries}>
                {spinner}
                {search}
                <div className={styles.overflow}>
                {countryData}
                </div>
               
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    //console.log('map',state.cou.countries);
    return{
        countriesData:state.cou.countries
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowCountriesDetails:()=>dispatch(initCountriesDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Countries);