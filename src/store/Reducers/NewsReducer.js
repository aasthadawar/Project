import * as actionTypes from '../Actions/ActionTypes';

const initialState={
    news:[],
    newsError:false
}

const NewsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.NEWS_DETAILS:
            var details = action.details;
            var updatedArray=[];
            var newsArray=[];
             newsArray=updatedArray.concat(details);
            return{
                ...state,
                news:newsArray
            }
        case actionTypes.FETCH_NEWS_ERRORS:
            return{
                ...state,
                newsError:true,
            }

    }
    return state;
}

export default NewsReducer;