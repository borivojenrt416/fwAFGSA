import {DODAJUOMILJENO,FILTRIRANJEOMILJENIH} from '../actions/types'

const initialState={
    omiljeno:[]
}


export default function(state=initialState,action){
    
    switch(action.type){
        case DODAJUOMILJENO:
            return{...state,
               omiljeno:action.payload
            }
            //     case ISPRAZNIKORPU:
            //         return{
            //             ...state,
            //             korpa:action.payload
            //         }
                        case FILTRIRANJEOMILJENIH:
                            return{
                                ...state,
                               omiljeno:action.payload
                            }
            default:
        return state;
    }

}

