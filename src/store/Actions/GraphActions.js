import * as actionTypes from './ActionTypes';
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const setGraphDetails = (res) => {
    return {
        type: actionTypes.GRAPH_CASES,
        details: res
    }
}

export const fetchGraphErrors = (res) => {
    return {
        type: actionTypes.FETCH_GRAPH_ERRORS,
        error: res
    }
}

export const initGraphDetails = () => {
    return dispatch => {
        axios.get(proxyurl + 'https://corona.lmao.ninja/v2/historical')
            .then(response => {
                dispatch(setGraphDetails(response.data))
            })
            .catch(error => {
                dispatch(fetchGraphErrors(error));
            })
    }
}
