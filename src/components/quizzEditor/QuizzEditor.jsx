import React from 'react';
import CreateQuestionFrame from './CreateQuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from './../../stores/QuizzStore';
import Login from './../login/Login.jsx'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';
import Actions from './../../actions/QuizzEditorActions';
import PlayerActions from './../../actions/QuizzPlayerActions';

@connectToStores
class QuizzEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log('creating QuizzEditor')
    }

    componentDidMount() {
        console.log('QuizzEditor did mount');
    }

    static getStores() {
        //console.log('QuizzerPlayer trying to get stores');
        return [QuizzStore];
    }

    static getPropsFromStores() {
        //console.log('QuizzerPlayer getting props from store Quizzer')
        let quizzStoreState = QuizzStore.getState();
        return quizzStoreState;
    }

    render() {

        let questionFrame = <CreateQuestionFrame />

        return (
            <div classname="QuizzEditor" width="420">
                <Grid>
                    <Row middle="xs">
                        <Col xs={1}>
                            <FlatButton icon={<ChevronLeft />} onClick={PlayerActions.navigateLeft} />
                        </Col>
                        <Col>
                            {questionFrame}
                        </Col>
                        <Col xs={1}>
                            <FlatButton icon={<ChevronRight />} onClick={PlayerActions.navigateRight} />
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }


}

export default QuizzEditor;  