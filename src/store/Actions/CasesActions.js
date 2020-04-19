import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const setCaseDetails=(res)=>{
    console.log('action cases @@@@@@@@@@@@@@@@@@@@@@',res.results[0]);
    return{
        type:actionTypes.CASE_DETAILS,
        details:res.results[0]
    }
}

export const initCaseDetails=()=>{
    return dispatch =>{
          
                axios.get('https://api.thevirustracker.com/free-api?global=stats')
        .then(response=>{
           console.log('inside init %%%%%%%%%',response.data);
            dispatch(setCaseDetails(response.data))
        })
        .catch(error=>{
            console.log('error is',error)
        })
     
    }
}