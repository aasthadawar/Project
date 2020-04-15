import * as actionTypes from '../Actions/ActionTypes';
import axios from 'axios';

const setNewCasesDetails=(res)=>{
    var formatRes = res.results[0];
    return{
        type:actionTypes.NEWCASES_DETAILS,
        details:formatRes,
    }
}

export const initNewCasesDetails=()=>{
    return dispatch=>{
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
    .then(response=>{
        console.log('new case response',response.data);
        dispatch(setNewCasesDetails(response.data));
    })
    .catch(error=>{
        console.log('error',error);
    })
    }
}