import alt from '../alt';
import Actions from '../actions';
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

@createStore(alt)
class QuizzStore{
    constructor(){
        this.state = {authData: null};
    }

    @bind(Actions.login)
    login(authData){
        this.setState(s => s.authData = authData)
    }
}

export default alt.createStore(QuizzStore);