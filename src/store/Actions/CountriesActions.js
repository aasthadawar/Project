import * as actionTypes from './ActionTypes';
import axios from 'axios';
import { fetchCaseErrors } from './CasesActions';
import { fetchGraphErrors } from './GraphActions';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const fetchCountryErrors=(error)=>{
    return{
        type:actionTypes.FETCH_COUNTRY_ERRORS,
        details:error
    }
}

export const setCountriesDetails=(res)=>{
    return{
        type:actionTypes.COUNTRIES_DETAILS,
        details:res
    }
}

export const initCountriesDetails=()=>{
    return  dispatch =>
        {
            var updateArray=[]
            
            axios.get(proxyurl+'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=1')
                .then(response=>{
                    updateArray = response.data.data.rows;
                    axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=2')
                    .then(response=>{
                        var newArray=response.data.data.rows;
                        var finalArray = [...newArray,...updateArray];
                        console.log('array2',finalArray);
                        dispatch(setCountriesDetails(finalArray))
                    })
                    .catch(error=>{
                        console.log('error is',error)
                        dispatch(fetchCountryErrors(error))
                    })
                })
                .catch(error=>{
                    console.log('error2')
                    dispatch(fetchCountryErrors(error))
                })
            }
    
    }

