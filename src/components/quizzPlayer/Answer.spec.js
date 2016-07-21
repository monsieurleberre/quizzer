import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.answerType=='one'){
            return (                
                <RadioButton key={this.key} label={this.props.answer}/>
                )
        } else {
            return (
                <div className="answer">
                    
                </div>
            )
        }
    }
}