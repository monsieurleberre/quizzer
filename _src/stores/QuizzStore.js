import alt from '../alt';
import Actions from '../actions/QuizzPlayerActions';
import QuestionSource from '../sources/QuestionSource'
import {createStore, bind, datasource} from 'alt-helpers/lib/decorators';

//@datasource(QuestionSource)
@createStore(alt)
class QuizzStore {
    constructor() {
        this.state = {
            questions: [],
            currentQuestionIndex: 0,
            maxIndex: 0,
            fetchQuestionsPending: false
        };
        console.debug(this)

        this.registerAsync(QuestionSource);
    }

    @bind(Actions.fetchQuestions)
    handleFetchedQuestions() {
        console.debug('handling fetch questions')
        if(this.state.fetchQuestionsPending) return;
        this.setState({fetchQuestionsPending: true});
        setTimeout(() => this.getInstance().fetchQuestions(), 0);
    }

    @bind(Actions.fetchQuestionsPending)
    handleFetchQuestionsPending() {
        console.debug('handling fetchQuestionsPending');
        this.setState({ fetchQuestionsPending: true });
    }

    @bind(Actions.fetchQuestionsCompleted)
    handleFetchQuestionsCompleted(questions) {
        console.debug('handling fetchQuestionsCompleted');
        this.setState(s => {
            console.debug(questions)
            s.questions = questions;
            s.currentQuestion = questions[s.currentQuestionIndex];
            s.maxIndex = questions.length - 1;
            s.fetchQuestionsPending = false;
            return s;
        });
    }

    @bind(Actions.navigateLeft)
    handleNavigateLeft() {
        console.debug('handling navigateLeft');
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
        console.debug('handling navigateRight');
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