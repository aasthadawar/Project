import * as actionTypes from './ActionTypes';
import axios from 'axios';


export const setTweetsDetails = (res) => {
    return {
        type: actionTypes.TWEETS_DETAILS,
        details: res
    }
}

export const fetchTweetsErrors = (res) => {
    return {
        type: actionTypes.FETCH_TWEETS_ERRORS,
        error: res
    }
}

export const initTweetsDetails = () => {
    return dispatch => {
        axios.get('./twitter.json')
            .then(response => {
                dispatch(setTweetsDetails(response.data))
            })
            .catch(error => {
                dispatch(fetchTweetsErrors(error));
            })
    }
}