import * as actionTypes from '../Actions/ActionTypes';

const initialState =
{
    result:
    {
        cases: {},
        deaths: {},
        recovered: {}
    },
    graphError: false
}

const GraphReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GRAPH_CASES:
            let details = action.details;
            var updatedArray = [];
            var graphArray = [];
            graphArray = updatedArray.concat(details);
            return {
                ...state,
                graphCases: graphArray
            }

        case actionTypes.FETCH_GRAPH_ERRORS:
            return {
                ...state,
                graphError: true,
            }
    }

    return state;
}

export default GraphReducer;