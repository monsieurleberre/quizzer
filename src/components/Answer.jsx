import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import RadioButton from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.answerType=='one')
            //return (<Checkbox label={this.props.answer}  />)
            return (                
                <div className="answer">
                    <ListItem 
                            primaryText={this.props.answer}
                            leftCheckbox={<RadioButton checked={false}/>} />
                </div>)
        else
            return (
                <div className="answer">
                    <ListItem 
                            primaryText={this.props.answer}
                            leftCheckbox={<Checkbox checked={false}/>} />
                </div>
            )
    }
}