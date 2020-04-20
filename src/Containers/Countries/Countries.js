import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { initCountriesDetails } from '../../store/Actions/CountriesActions';
import Country from '../../Components/Country/Country';
import styles from '../Countries/Countries.module.css';
import Spinner from '../../Components/UI/Spinner/Spinner';
import ErrorHandling from '../../Components/ErrorHandling/ErrorHandling';

class Countries extends PureComponent{
    constructor(){
        super();
        this.country=[];
        this.state={
            filterArray:[],
        }
    }
    componentDidMount()
    {
        this.props.onShowCountriesDetails();
        this.myInterval = setInterval(()=>{
            this.props.onShowCountriesDetails();
        },600000)
    }

    componentWillUnmount()
    {
        clearInterval(this.myInterval);
    }
    onSearchHandler=(event)=>{
        var value=event.target.value;
        var formattedValue = value.toLowerCase();
        var arr = this.country.filter(items=>items.country.toLowerCase().includes(formattedValue))
        this.setState({...this.state,...this.state.filterArray,filterArray:arr})
    }
    render()
    {
        if(this.props.countriesData)
        {
            this.country=[];
            if(this.props.countriesData.length==0 && this.props.countriesError==false){
                var spinner = <Spinner/>
           }

            else if(this.props.countriesData.length!=0)
            {
                this.country=this.props.countriesData; 
                var counter=0;

                if(this.state.filterArray.length==0)
                {
                    var countryData = (
                    this.country.map(items=>{
                        counter++;
                        return(
                            <Country key={counter} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/>
                        );
                    }))
                }
                else
                {
                    var countryData = (
                        this.state.filterArray.map(items=>{
                            return(
                                <Country key={items.country} name={items.country} url={items.flag} recovered={items.total_recovered} active={items.active_cases}/>
                            );
                        })
                    )
                }
                var search=(
                    <div className={styles.Search}>
                        <div className={styles.Icon}><input onChange={()=>this.onSearchHandler(window.event)} type="text" placeholder="search location "></input></div>
                    </div>
                )
            }
        } 
       if(this.props.countriesError==true)
       {  console.log('country error')
           var error = <ErrorHandling/>
       }
        return(
            <div className={styles.Countries}>
                {spinner}
                {error}
                {search}
                <div className={styles.overflow}>
                {countryData}
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        countriesData:state.cou.countries,
        countriesError:state.cou.countryError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowCountriesDetails:()=>dispatch(initCountriesDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Countries);