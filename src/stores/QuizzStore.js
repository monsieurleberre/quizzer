import alt from '../alt';
import Actions from '../actions';
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

@createStore(alt)
class QuizzStore{
    constructor(){
        this.state = {user: null};
    }

    @bind(Actions.login)
    login(user){
        this.setState(s => s.user = user)
    }
}

export default alt.createStore(QuizzStore);