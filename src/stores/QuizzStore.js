import alt from '../alt';
import Actions from '../actions';
import QuestionSource from '../sources/QuestionSource'
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

@datasource(QuestionSource)
@createStore(alt)
class QuizzStore{
    constructor(){
        this.state = {
            user: null,
            questions: null,
            currentQuestionIndex: 0
        };
        console.log(this)
           
        this.registerAsync(QuestionSource);
    }

    @bind(Actions.login)
    handleLogin(user){
        console.log('loggin in')
        console.log(this.getInstance())
        this.setState(s => s.user = user)
    }

    @bind(Actions.setQuestionList)
    handleSetQuestionList(questions){
        console.log('handling questionlist set');
        this.setState({
            questions,
            currentQuestion: questions[currentQuestionIndex],
            messagesDirty: true
        });
    }

    @bind(Actions.navigateLeft)
    handleNavigateLeft(currentIndex = 0, minIndex = 0){
        console.log('handling navigate left');
        if(currentIndex <= minIndex) return;
        let newIndex = currentIndex - 1;
        console.log(`new index : ${newIndex}`);
        this.setState(previousState => {
            previousState.currentQuestion = this.props.questions[newIndex]
            previousState.currentQuestionIndex = newIndex
        });
    }

    @bind(Actions.navigateRight)
    handleNavigateRight(currentIndex = 0, minIndex = 0){
        console.log('handling navigate right');
        if(currentIndex >= minIndex) return;
        let newIndex = currentIndex + 1;
        console.log(`new index : ${newIndex}`);
        this.setState(previousState => {
            previousState.currentQuestion = this.props.questions[newIndex]
            previousState.currentQuestionIndex = newIndex
        });
    }


}

export default alt.createStore(QuizzStore, 'QuizzStore');