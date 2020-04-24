import * as actionTypes from './ActionTypes';
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const setCaseDetails = (res) => {
    return {
        type: actionTypes.CASE_DETAILS,
        details: res
    }
}

export const fetchCaseErrors = (res) => {
    return {
        type: actionTypes.FETCH_CASE_ERRORS,
        error: res
    }
}

export const initCaseDetails = () => {
    return dispatch => {
        axios.get(proxyurl + 'https://corona.lmao.ninja/v2/all')
            .then(response => {

                dispatch(setCaseDetails(response.data))
            })
            .catch(error => {
                dispatch(fetchCaseErrors(error));
            })
    }
}