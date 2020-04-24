import * as actionTypes from '../Actions/ActionTypes';

const initialState =
{
    countries: [],
    countryError: false
}

const CountriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTRIES_DETAILS:
            var updatedArray = [];
            var countryArray = [];
            let details = action.details;
            countryArray = updatedArray.concat(details);
            return {
                ...state,
                countries: countryArray
            }

        case actionTypes.FETCH_COUNTRY_ERRORS:
            return {
                ...state,
                countryError: true,
            }
    }

    return state;
}

export default CountriesReducer;