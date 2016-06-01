import React from 'react'
import ReactDOM from 'react-dom'
//import QuestionFrame from './components/QuestionFrame'
import TestComponent from './TestComponent' 
var message = "mofo"

console.log(`this is quite a special es6 message ${message}`)

ReactDOM.render(<TestComponent />, document.getElementById("quizzer"))  