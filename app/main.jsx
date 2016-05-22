var React = require('react');
var ReactDOM = require('react-dom');

console.log("main.jsx is f**ing running");

var fs = require("fs");

var questions;
fs.readFile("questions.json", 
    (err, data) => {
        if(err){
            console.log("failed to read file" + err.message + err.stack);
            question = [];
            return;
        }
        question = JSON.parse(data);
    })

var QuestionFrame = require("./components/QuestionFrame.jsx");

ReactDOM.render(<QuestionFrame />, document.getElementById('quizzer'));