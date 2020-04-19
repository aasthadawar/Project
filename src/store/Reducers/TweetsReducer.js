import * as actionTypes from '../Actions/ActionTypes';

const initialState={
   tweets:[]
}

const tweetsReducer=(state=initialState,action)=>{
    //console.log('response reducer',action.details);
    switch(action.type){
        case actionTypes.TWEETS_DETAILS:
            var updatedArray=[];
            updatedArray=action.details;  
            console.log('@@@@@@@@@@@@******** news reducer',updatedArray);               
            return{
               ...state,
               tweets:updatedArray
              
            }
    }
    return state;
}

export default tweetsReducer;