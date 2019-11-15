import {UZMIISTORIJU} from '../actions/types'

const initialState={
    istorija:[]
}


export default function(state=initialState,action){
    switch(action.type){
        case UZMIISTORIJU:
            return{...state,
              istorija:action.payload
            }
            default:
        return state;
    }

}

