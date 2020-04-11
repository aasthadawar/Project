import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const setCaseDetails=(res)=>{
    //console.log('action',res);
    return{
        type:actionTypes.CASE_DETAILS,
        details:res
    }
}

export const initCaseDetails=()=>{
    return dispatch =>{
          setInterval(()=>{
                axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
        .then(response=>{
           // console.log('inside init',response.data.data);
            dispatch(setCaseDetails(response.data.data))
        })
        .catch(error=>{
            console.log('error is',error)
        })
     },5000 )
    }
}