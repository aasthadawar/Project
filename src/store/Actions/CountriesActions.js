import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const setCountriesDetails=(res)=>{
    //console.log('inside actions',res.rows);
    return{
        type:actionTypes.COUNTRIES_DETAILS,
        details:res.rows
    }
}

export const initCountriesDetails=()=>{
    return dispatch =>{
        setInterval(()=>{
        axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
        .then(response=>{
            console.log('inside init',response.data.data);
            dispatch(setCountriesDetails(response.data.data))
        })
        .catch(error=>{
            console.log('error is',error)
        })
     },300000 )
    }
}