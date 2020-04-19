import * as actionTypes from '../Actions/ActionTypes';

const initialState={
   cases:{total:0,recovered:0,active:0,deaths:0}
}

const casesReducer=(state=initialState,action)=>{
    //console.log('response reducer',action.details);
    switch(action.type){
        case actionTypes.CASE_DETAILS:
            //console.log('case re',state.cases)
            console.log('response reducer cases%%%%%%%%%%%',action.details);
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
            active:details.total_active_cases,
        recovered:details.total_recovered,
    deaths:details.total_deaths,
    },    
            }
    }
    return state;
}

export default casesReducer;