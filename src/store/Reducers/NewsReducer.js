import * as actionTypes from '../Actions/ActionTypes';

const initialState={
    news:[]
}

const NewsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.NEWS_DETAILS:
            var details = action.details;
            console.log('&&&**** reducer',action.details);
            var updatedArray=[];
            var newsArray=[];
             newsArray=updatedArray.concat(details);
            return{
                ...state,
                news:newsArray
            }
    }
    return state;
}

export default NewsReducer;