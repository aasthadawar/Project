import * as actionTypes from '../Actions/ActionTypes';

const initialState={
   cases:{total:0,recovered:0,active:0,deaths:0},
   caseError:false,
}

const casesReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.CASE_DETAILS:
            let details = action.details;
            return{
               ...state,
               cases:{...state.cases,
                total:details.total_cases,
            active:details.total_active_cases,
        recovered:details.total_recovered,
    deaths:details.total_deaths,
               },
            }
            case actionTypes.FETCH_CASE_ERRORS:
                return{
                    ...state,
                    caseError:true,
                }

    }
    return state;
}

export default casesReducer;