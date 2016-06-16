import alt from '../alt';
import Actions from '../actions';
import QuestionSource from '../sources/QuestionSource'
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

@datasource(QuestionSource)
@createStore(alt)
class QuizzStore {
    constructor() {
        this.state = {
            user: null,
            questions: null,
            currentQuestionIndex: 0,
            maxIndex: 0,
            loadingQuestionList: false
        };
        console.log(this)

        this.registerAsync(QuestionSource);
        //this.getQuestions();
    }

    @bind(Actions.login)
    handleLogin(user) {
        console.log('loggin in')
        this.setState(s => {
            console.log('next state');
            console.log(s);
            s.user = user;
            return s;
        });
        setTimeout(() => Actions.fetchQuestionList(), 0);
    }

    @bind(Actions.fetchQuestionList)
    handleFetchQuestionList() {
        console.log('handling fetch question list')
        setTimeout(() => this.getInstance().getQuestions(), 0);
        //this.preventDefault();
    }

    @bind(Actions.loadingQuestionList)
    handleLoadingQuestionList() {
        console.log('handling loadingQuestionList');
        this.setState(s => {
            s.loadingQuestionList = true;
            return s;
        });
    }

    @bind(Actions.setQuestionList)
    handleSetQuestionList(questions) {
        console.log('handling questionlist set');
        this.setState(s => {
            console.log(questions)
            s.questions = questions;
            s.currentQuestion = questions[s.currentQuestionIndex];
            s.maxIndex = questions.length - 1;
            s.loadingQuestionList = false;
            console.log(s);
            return s;
        });
    }

    @bind(Actions.navigateLeft)
    handleNavigateLeft() {
        console.log('handling navigate left');
        if (this.state.currentQuestionIndex <= 0) return;
        let newIndex = this.state.currentQuestionIndex - 1;
        this.setState(s => {
            s.currentQuestion = s.questions[newIndex];
            s.currentQuestionIndex = newIndex;
            return s
        });
    }

    @bind(Actions.navigateRight)
    handleNavigateRight() {
        console.log('handling navigate right');
        if (this.state.currentQuestionIndex >= this.state.maxIndex) return;
        let newIndex = this.state.currentQuestionIndex + 1;
        this.setState(s => {
            s.currentQuestion = s.questions[newIndex];
            s.currentQuestionIndex = newIndex;
            return s;
        });
    }


}

export default alt.createStore(QuizzStore, 'QuizzStore');