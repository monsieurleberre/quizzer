import React from 'react'
import ReactDom from 'react-dom'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox';
import List from 'material-ui/List'

export default class AnswerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            if(this.props.answerType == 'one') {
                this.answerNodes = Object.keys(this.props.answers).map((a,i) => 
                    <RadioButton label={this.props.answers[a].answer} 
                        value={this.props.answers[a].answer} 
                        key={this.props.answers[a].answer} 
                        score={this.props.answers[a].score}/>);
                return (
                    <RadioButtonGroup name="answerGroup" children={this.answerNodes} />
            )}  else {
                this.answerNodes = Object.keys(this.props.answers).map((a,i) => 
                    <Checkbox label={this.props.answers[a].answer} 
                        key={this.props.answers[a].answer} 
                        score={this.props.answers[a].score}/>);
                return (
                    <div>
                        {this.answerNodes}
                    </div>
            )}    
    }
}