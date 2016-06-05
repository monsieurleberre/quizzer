import React from 'react'
import ReactDom from 'react-dom'
import Answer from './Answer.jsx'
import RadioButtonGroup from 'material-ui/RadioButton'
import List from 'material-ui/List'

export default class AnswerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //answers : { no : { score: 1}, fucking : { score: -1}, Answer : { score: 1}},
            answers : props.answers,
            answerType : props.answerType               
        };
        this.props = props;
    }

    render() {
        this.answerNodes = Object.keys(this.props.answers).map((a,i) => 
            <Answer answer={a} answerType={this.props.answerType} key={i} score={this.props.answers[a].score}/>);
        if(this.props.answerType == "one") 
            return (
                <List className="answerList">
                        {this.answerNodes}     
                </List>
            )
        else
            return (
                <List className="answerList">
                        {this.answerNodes}
                    
                </List>
            )      
    }
}