import * as actionTypes from '../Actions/ActionTypes';

const initialState={
   cases:{total:0,recovered:0,active:0,deaths:0},
   update:''
}

const casesReducer=(state=initialState,action)=>{
    //console.log('response reducer',action.details);
    switch(action.type){
        case actionTypes.CASE_DETAILS:
            //console.log('case re',state.cases)
            //console.log('response reducer switch',action.details);
            let details = action.details;
            
            //var destructure={...state,yo:{...state.cases}}
            //console.log('parse',destructure.yo.total);
            //console.log('des',destructure);
            //console.log('case',state);
            //console.log('details',details);
            return{
               ...state,
               cases:{...state.cases,
                total:details.total_cases,
            active:details.currently_infected,
        recovered:details.recovery_cases,
    deaths:details.death_cases,
    },
    update:details.last_update
        
            }
    }
    return state;
}

export default casesReducer;