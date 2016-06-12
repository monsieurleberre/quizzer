import alt from '../alt';
import Actions from '../actions';
import QuestionSource from '../sources/QuestionSource'
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

@datasource(QuestionSource)
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