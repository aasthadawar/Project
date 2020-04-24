import * as actionTypes from '../Actions/ActionTypes';

const initialState =
{
    tweets: [],
    tweetsError: false
}

const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TWEETS_DETAILS:
            var updatedArray = [];
            updatedArray = action.details;
            return {
                ...state,
                tweets: updatedArray

            }

        case actionTypes.FETCH_TWEETS_ERRORS:
            return {
                ...state,
                tweetsError: true,
            }
    }

    return state;
}

export default tweetsReducer;