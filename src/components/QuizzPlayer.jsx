import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
    
export default class QuizzPlayer extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div classname="QuizzPlayer" width="420">
                <QuestionFrame questions={this.props.questions}/>
            </div>
            )
    }
}
  