import * as actionTypes from '../Actions/ActionTypes';
import axios from 'axios';

const setNewsDetails=(res)=>{
    console.log('**&&& action',res);
    return{
        type:actionTypes.NEWS_DETAILS,
        details:res.articles
    }
}

export const initNewsDetails=(dispatch)=>{
    return dispatch=>{
        axios.get('http://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=e4a1b8f18073429b85366a0b6f31c8d5')
        .then(response=>{
            console.log('****&&&&&&',response.data)
            dispatch(setNewsDetails(response.data))
        })
        .catch(error=>console.log(error))
    }
}