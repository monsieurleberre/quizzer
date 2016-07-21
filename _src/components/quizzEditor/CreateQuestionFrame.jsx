import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Actions from './../../actions/QuizzEditorActions'

export default class CreateQuestionFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="createQuestionFrame">
                <Card style={{ backgroundColor: 'a0a0a0' }}>
                    <CardHeader title="EDITION MODE" />

                    <CardTitle 
                        titleColor='red'>    
                        <CardText>
                            <TextField
                                hintText="Enter your question here"
                                floatingLabelText="Question"
                                type="text" /><br />
                        </CardText>
                             
                    </CardTitle>
                    <FlatButton label="Delete"
                        secondary={true}
                        onClick={() => Actions.delete() }/>
                    <FlatButton label="Save"
                        primary={true}
                        onClick={() => Actions.save() } />
                </Card>

            </div>
        )
    }
}
