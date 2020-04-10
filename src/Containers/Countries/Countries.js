import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { initCountriesDetails } from '../../store/Actions/CountriesActions';
import Country from '../../Components/Country/Country';
import styles from '../Countries/Countries.module.css';
import SearchBar from '../../Components/UI/SearchBar/SearchBar';

class Countries extends PureComponent{
    constructor(){
        super();
        this.country=[]
    }
    componentDidMount(){
        this.props.onShowCountriesDetails();
    }

    render(){
       if(this.props.countriesData.length!=0){
            console.log('countries data',this.props.countriesData);
            this.country=this.props.countriesData
            console.log('array',this.country);
            
            var search=<SearchBar/>


           var countryData = (
        
            this.country.map(items=>{
                return(
                 <Country key={items.country} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/>
                );
            }))

            

       }
        
        return(
            <div className={styles.Countries}>
                {search}
               {countryData}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('map',state.cou.countries);
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
