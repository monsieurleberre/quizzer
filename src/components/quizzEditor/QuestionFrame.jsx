import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'react-material-icons/icons/navigation/chevron-right';
import ChevronLeft from 'react-material-icons/icons/navigation/chevron-left';

export default class QuestionFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="questionFrame">
                <Card style={{backgroundColor: 'a0a0a0'}}>
                    <CardHeader title="EDITION MODE" />
                    <CardTitle title={this.props.question.question} subtitle={this.props.question.tip} titleColor='red'/>

                </Card>
                
            </div>
        )
    }
}
