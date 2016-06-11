import React from 'react';
import QuestionFrame from './QuestionFrame.jsx'
import connectToStores from 'alt-utils/lib/connectToStores';
import QuizzStore from '../stores/QuizzStore';
import Login from './Login.jsx'

@connectToStores    
class QuizzPlayer extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        if(!this.props.user) return (<Login />);

        return (
            <div classname="QuizzPlayer" width="420">
                <QuestionFrame questions={this.props.questions}/>
            </div>
            )
    }

    static getStores(){
        return [QuizzStore];
    }

    static getPropsFromStores(){
        return QuizzStore.getState();
    }

}

export default QuizzPlayer;  