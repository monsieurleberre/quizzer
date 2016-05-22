var React = require('react');
var ReactDOM = require('react-dom');

console.log("main.jsx is f**ing running");

var Question = require("./components/Question.jsx");

ReactDOM.render(<Question />, document.getElementById('quizzer'));