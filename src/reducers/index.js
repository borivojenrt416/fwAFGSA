import {combineReducers} from 'redux';
import proizvodiReducer from './proizvodiReducer'
import tipReducer from './tipReducer'

export default combineReducers({
proizvodi:proizvodiReducer,
tip:tipReducer
});