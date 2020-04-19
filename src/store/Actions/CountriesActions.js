import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const setCountriesDetails=(res)=>{
    console.log('inside actions',res);
    return{
        type:actionTypes.COUNTRIES_DETAILS,
        details:res
    }
}

 export const initCountriesDetails=()=>{
    return  dispatch =>{
                var updateArray=[]
                async function countryDetails(){
            await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=1')
                .then(response=>{
                    updateArray = response.data.data.rows;
                })
                .catch(error=>{
                    console.log('error is',error)
                })

                axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&page=2')
                .then(response=>{
                    var newArray=response.data.data.rows;
                    var finalArray = [...newArray,...updateArray];
                    console.log('array2',finalArray);
                    dispatch(setCountriesDetails(finalArray))
                })
                .catch(error=>{
                    console.log('error is',error)
                })
                }
                countryDetails();

    }
}