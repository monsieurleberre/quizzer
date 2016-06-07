import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from './components/ThemeWrapper.jsx';
import QuestionFrame from './components/QuestionFrame.jsx';
import mui from 'material-ui';
//import FirebaseConfigs from './FirebaseConfigs';
import firebase from 'firebase';


var question = {
    "question": "Who do you really think you are ?",
    "answerType": "many",
    "answers": {  "The person that is reading this" : { "score" : 1 },  "Your parent's kid" : { "score" : 1 },  "A question answerer" : { "score" : 1 },  "That other guy too" : { "score" : 1 },  "A drunk programer" : { "score" : 1 }},
    "tags": [ "basic" ],
    "explanation": "You're anything but that other guy",
    "tip": "no tip for that question: sort yourself out"
};

ReactDOM.render(<ThemeWrapper question={question}/>, document.getElementById('quizzer'));
