import React from 'react'
import QuestionFrame from './components/QuestionFrame' 
var message = "mofo"

console.log(`this is quite a special es6 message ${message}`)

React.render(<QuestionFrame />, document.getElementById("quizzer"))