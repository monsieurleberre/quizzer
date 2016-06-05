import React from 'react';
import ReactDOM from 'react-dom'
import QuestionFrame from './components/QuestionFrame.jsx';
//import JsonQuestionReader from './JsonQuestionReader'

//var questions = new JsonQuestionReader().refresh()
import questions from './questions.json'
console.log(`Matt has written ${Object.keys(questions).length} questions`)

var question = {
    "question": "Which of these systems has Cassandra emerged from?",
    "answerType": "many",
    "answers": {  "Amazon DynamoDB" : { "score" : 1 },  "Apache Hadoop" : { "score" : -1 },  "Cassandra itself; it's both a chicken and an egg! " : { "score" : 1 },  "Google big tables" : { "score" : 1 },  "Microsoft Azure DocumentDB" : { "score" : 1 }},
    "tags": [ "basic" ],
    "explanation": null,
    "tip": null
};

ReactDOM.render(<QuestionFrame question="htmlquestion" tip="htmltip" question={question}/>, document.getElementById('quizzer'));
