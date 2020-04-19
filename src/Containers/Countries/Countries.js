import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { initCountriesDetails } from '../../store/Actions/CountriesActions';
import Country from '../../Components/Country/Country';
import styles from '../Countries/Countries.module.css';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Countries extends PureComponent{
    constructor(){
        super();
        this.country=[];
        this.state={
            filterArray:[],
        }
    }
    componentDidMount(){
        this.myInterval =  this.props.onShowCountriesDetails();
         setInterval(()=>{
             this.props.onShowCountriesDetails();
         },600000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    onSearchHandler=(event)=>{
            var value=event.target.value;
            var formattedValue = value.toLowerCase();
            var arr = this.country.filter(items=>items.country.toLowerCase().includes(formattedValue))
            this.setState({...this.state,...this.state.filterArray,filterArray:arr})
    }
    render(){
       
       if(this.props.countriesData){
          this.country=[]
           if(this.props.countriesData.length==0){
               var spinner = <Spinner/>
           }

           else if(this.props.countriesData.length!=0){
               this.country=this.props.countriesData;
           }
            
           var search=(
            <div className={styles.Search}>
                <div className={styles.Icon}><input onChange={()=>this.onSearchHandler(window.event)} type="text" placeholder="search location "></input></div>
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

                this.state.filterArray.map(items=>{
                        return(
                         <Country key={items.country} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/>
                        );
                    })
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