import React from 'react'

class QuestionFrame extends React.Component {
    constructor() {
        super();
        this.state = {
            question: {
                "question": "Which of these systems has Cassandra emerged from?",
                "answer_type": "many",
                "answers": {  "Amazon DynamoDB" : { "score" : 1 },  "Apache Hadoop" : { "score" : -1 },  "Cassandra itself; it's both a chicken and an egg! " : { "score" : 1 },  "Google big tables" : { "score" : 1 },  "Microsoft Azure DocumentDB" : { "score" : 1 }},
                "tags": [ "basic" ],
                "explanation": null,
                "tip": null
            },
        };
        this.props = {

        };
    }

    render() {
        return (
            <div className="questionFrame">
                <Question question="{this.state.question.question}" tip="{this.state.question.tip}" />
            </div>
        )
    }
}

//                     <Question question="{this.props.question.question}" tip="{this.props.question.tip}" />
//                     <AnswerList answers="{this.props.question.answers}" answer="{this.props.question.answer_type}"/>
//                     <Explanation explanation="{this.props.question.explanation}" />