import * as actionTypes from '../Actions/ActionTypes';


const initialState = {
    countries:[]
}



const CountriesReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.COUNTRIES_DETAILS:
            //console.log('country',state.countries);
            var updatedArray=[];
            var countryArray=[];
            let details=action.details;
             countryArray=updatedArray.concat(details);
            //console.log('updated',updatedArray);
            return{
                ...state,
                countries:countryArray
                
            }
        
    }
    return state;
}

export default CountriesReducer;