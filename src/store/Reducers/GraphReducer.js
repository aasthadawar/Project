import * as actionTypes from '../Actions/ActionTypes';

const initialState={
   result:{
       cases:{},
       deaths:{},
       recovered:{}
   }
}

const GraphReducer=(state=initialState,action)=>{
    //console.log('response reducer',action.details);
    switch(action.type){
        case actionTypes.GRAPH_CASES:
            //console.log('case re',state.cases)
            //console.log('response reducer switch',action.details);
            let details = action.details;
            console.log('!!!!!!!reducer',details);
            //var destructure={...state,yo:{...state.cases}}
            //console.log('parse',destructure.yo.total);
            //console.log('des',destructure);
            //console.log('case',state);
            //console.log('details',details);
            var updatedArray=[];
            var graphArray=[];
             graphArray=updatedArray.concat(details);
            return{
               ...state,
               graphCases:graphArray
            }
    }
    return state;
}

export default GraphReducer;