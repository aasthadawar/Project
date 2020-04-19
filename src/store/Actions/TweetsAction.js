import * as actionTypes from './ActionTypes';
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const token = "AAAAAAAAAAAAAAAAAAAAAIFnDgEAAAAAB1MMFdRvfGYgxazISPMavzUxFxs%3Du2qVlil6PsL9wbVFj8JSbgfNJoMGBbWguIarM8JaPqLRgvcWAW";

export const setTweetsDetails=(res)=>{
    console.log('@@@@@@@@@@@****************  news action',res);
    return{
        type:actionTypes.TWEETS_DETAILS,
        details:res
    }
}

export const initTweetsDetails=()=>{
    return dispatch =>{
          
        axios.get('./twitter.json')       
        .then(response=>{
           // console.log('inside init',response.data.data);
            dispatch(setTweetsDetails(response.data))
        })
        .catch(error=>{
            console.log('error is',error)
        })
    }
}