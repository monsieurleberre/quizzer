import alt from '../alt';
import Actions from '../actions';
import QuestionSource from '../sources/QuestionSource'
import {createStore, bind, datasource} from 'alt-utils/lib/decorators';

//@datasource(QuestionSource)
@createStore(alt)
class QuizzStore {
    constructor() {
        this.state = {
            questions: [],
            currentQuestionIndex: 0,
            maxIndex: 0,
            loadingQuestionList: false
        };
        console.log(this)

        this.registerAsync(QuestionSource);
    }

    @bind(Actions.fetchQuestionList)
    handleFetchQuestionList() {
        console.log('handling fetch question list')
        if(this.state.loadingQuestionList) return;
        this.setState({loadingQuestionList: true});
        setTimeout(() => this.getInstance().getQuestions(), 0);
    }

    @bind(Actions.loadingQuestionList)
    handleLoadingQuestionList() {
        console.log('handling loadingQuestionList');
        this.setState({ loadingQuestionList: true });
    }

    @bind(Actions.setQuestionList)
    handleSetQuestionList(questions) {
        console.log('handling setQuestionList');
        this.setState(s => {
            console.log(questions)
            s.questions = questions;
            s.currentQuestion = questions[s.currentQuestionIndex];
            s.maxIndex = questions.length - 1;
            s.loadingQuestionList = false;
            return s;
        });
    }

    @bind(Actions.navigateLeft)
    handleNavigateLeft() {
        console.log('handling navigateLeft');
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
        console.log('handling navigateRight');
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