import {UZMIISTORIJU} from '../actions/types'

const initialState={
    istorija:[]
}


export default function(state=initialState,action){
    console.log("istorija...")
    console.log(state)
    switch(action.type){
        case UZMIISTORIJU:
            return{...state,
              istorija:action.payload
            }
            default:
        return state;
    }

}

