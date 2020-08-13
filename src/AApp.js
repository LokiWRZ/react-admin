import store from './store';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './redux/authActions';

if(localStorage.jwToken){
    console.log(11)
    setAuthToken(localStorage.jwToken)
    //decode token
    const decoded = jwt_decode(localStorage.jwToken)
    store.dispatch(setCurrentUser(decoded))
    // check token
    // get local-time
    const currentTime = Data.now() / 1000;
    console.log(decoded)
    console.log(currentTime)
    // check whether localtime more than expire time in tiken
    if(decoded.exp < currentTime){
        //expire
        store.dispatch(logoutUser())
        // logout and transfer pages
        window.location.href = "/login";
    }
}