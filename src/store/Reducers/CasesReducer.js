import * as actionTypes from '../Actions/ActionTypes';

const initialState =
{
    cases: { total: 0, recovered: 0, active: 0, deaths: 0 },
    caseError: false,
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CASE_DETAILS:

            let details = action.details;
            return {
                ...state,
                cases: {
                    ...state.cases,
                    total: details.cases,
                    active: details.active,
                    recovered: details.recovered,
                    deaths: details.deaths,
                },
            }

        case actionTypes.FETCH_CASE_ERRORS:
            return {
                ...state,
                caseError: true,
            }

    }

    return state;
}

export default casesReducer;