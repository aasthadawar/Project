import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const setGraphDetails=(res)=>{
    console.log('!!!!!!!!!!!action',res);
    return{
        type:actionTypes.GRAPH_CASES,
        details:res
    }
}

export const initGraphDetails=()=>{
    return dispatch =>{
        setInterval(()=>{
                axios.get('https://corona.lmao.ninja/v2/historical')
        .then(response=>{
           console.log('!!!!!!!!!!inside init',response.data);
            dispatch(setGraphDetails(response.data))
        })
        .catch(error=>{
            console.log('error is',error)
        })
    },300000)
     }
    }
