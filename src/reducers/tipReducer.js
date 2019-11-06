import {UZMI_TIP,SORTIRAJ_TIP} from '../actions/types'

const initialState={
    tip:[]
}


export default function(state=initialState,action){
    
    switch(action.type){
        case UZMI_TIP:
            return{
                ...state,
                tip:action.payload
            }
        case SORTIRAJ_TIP:
            return{
               
                tip:action.payload
            }
            default:
        return state;
    }

}

