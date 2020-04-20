import * as actionTypes from '../Actions/ActionTypes';
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const setNewsDetails=(res)=>{
    return{
        type:actionTypes.NEWS_DETAILS,
        details:res.articles
    }
}

export const fetchNewsErrors=(res)=>{
    return{
        type:actionTypes.FETCH_NEWS_ERRORS,
        error:res
    }
}

export const initNewsDetails=(dispatch)=>{
    return dispatch=>{
        axios.get(proxyurl+'http://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=e4a1b8f18073429b85366a0b6f31c8d5')
        .then(response=>{
            dispatch(setNewsDetails(response.data))
        })
        .catch(error=>{
            dispatch(fetchNewsErrors(error));
        })
    }
}