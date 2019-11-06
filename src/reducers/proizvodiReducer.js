import {DOHVATI_PROIZVODE} from '../actions/types'

const initialState={
    proizvodi:[]
}

export default function(state=initialState,action){
    
    switch(action.type){
        case DOHVATI_PROIZVODE:  
        console.log(state)
            return{
                ...state,
                proizvodi:action.payload
            }
            default:
        return state;
    }

}
