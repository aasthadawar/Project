import * as actionTypes from '../Actions/ActionTypes';


const initialState = {
    countries:[]
}



const CountriesReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.COUNTRIES_DETAILS:
            console.log('country',state.countries);
            let details=action.details;
            var updatedArray=[];
            updatedArray=state.countries.concat(details);
            console.log('updated',updatedArray);
            return{
                ...state,
                countries:updatedArray
                
            }
        
    }
    return state;
}

export default CountriesReducer;