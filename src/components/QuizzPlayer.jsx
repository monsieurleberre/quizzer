import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from '../stores/QuizzStore';
import Login from './Login.jsx'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';
import Actions from '../actions'

@connectToStores
class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        console.log('creating QuizzPlayer')
    }

    componentDidMount() {
        console.log('QuizzPlayer did mount');
        if(this.props.user){
            console.log('loading started')
            Actions.fetchQuestionList().defer();
            console.log('defered fetching questions')
            console.log(this.props)
        }
            //Actions.fetchQuestionList()
    }

    static getStores() {
        console.log('trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        console.log('QuizzerPlayer getting props from store Quizzer')
        return QuizzStore.getState();
    }

    render() {

        if (!this.props.user) return (<Login />);
        if (!this.props.questions && !this.props.isLoadingQuestionList) {
            
            return (<CircularProgress mode="indeterminate" on/>);
        }
        return (
            <div classname="QuizzPlayer" width="420">
                <Grid>
                    <Row>
                        <Col xs={1} middle="xs"><FlatButton icon={<ChevronLeft />} onClick={() => { } } /></Col>
                        <Col center="xs" middle="xs">
                            <QuestionFrame question={this.props.currentQuestion}
                                questionIndex={this.props.currentQuestionIndex}
                                questionsCount={this.props.questionsCount} />
                        </Col>

                        <Col xs={1} middle="xs">
                            <FlatButton icon={<ChevronRight />} onClick={() => { } } /></Col>
                    </Row>

                </Grid>

            </div>
        )
    }


}

export default QuizzPlayer;  