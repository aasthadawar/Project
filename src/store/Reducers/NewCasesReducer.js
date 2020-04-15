import * as actionTypes from '../Actions/ActionTypes';

const initialState={
    newCases:0,
}

 const NewCaseReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.NEWCASES_DETAILS:
            console.log('details in reducer',action.details.total_new_cases_today);
            var newData = action.details.total_new_cases_today;
            console.log(typeof newData)
            return{
                ...state,
                newCases:newData
            }
    }
    return state;

}

export default NewCaseReducer;