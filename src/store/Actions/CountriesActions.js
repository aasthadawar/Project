import * as actionTypes from './ActionTypes';
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const fetchCountryErrors = (error) => {
    return {
        type: actionTypes.FETCH_COUNTRY_ERRORS,
        details: error
    }
}

export const setCountriesDetails = (res) => {
    return {
        type: actionTypes.COUNTRIES_DETAILS,
        details: res
    }
}

export const initCountriesDetails = () => {
    return dispatch => {

        axios.get(proxyurl + 'https://corona.lmao.ninja/v2/countries?sort=country')
            .then(response => {
                dispatch(setCountriesDetails(response.data))
            })
            .catch(error => {
                dispatch(fetchCountryErrors(error))
            })

    }
}

