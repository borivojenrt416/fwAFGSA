import {combineReducers} from 'redux';
import proizvodiReducer from './proizvodiReducer'
import tipReducer from './tipReducer'
import korisnikReducer from './korisnikReducer'
import dodajUKorpu from './dodajUKorpu'
import istorijakupljenih from './istorijakupljenih'
import dodajUOmiljeno from './dodajUOmiljeno';

export default combineReducers({
proizvodi:proizvodiReducer,
tip:tipReducer,
korisnik:korisnikReducer,
korpa:dodajUKorpu,
poruka:dodajUKorpu,
istorija:istorijakupljenih,
broj:dodajUKorpu,
omiljeno:dodajUOmiljeno,
cena:dodajUKorpu
});