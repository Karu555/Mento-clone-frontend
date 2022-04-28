import {ALL_TOPICS, ERROR, LOADING} from "./actionType"

const initState = {
    allTopic : [],
    isLoading : false,
    isError : false
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case ALL_TOPICS:
            return {...state,
                 allTopic : action.payload}
            
        case LOADING:
            return {
               ...state,
               isLoading: false
            }

        case ERROR:
            return {
                ...state, 
                isError: false
            }    
        default :
         return state
    }
}

export {reducer}