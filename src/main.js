import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from './components/ThemeWrapper.jsx';
import FirebaseConfigs from './sources/FirebaseConfigs';
import FirebaseRefs from './sources/FirebaseRefs'
import Firebase from 'firebase';

let testData = {
        'questions':{
            '0' : {
                'question': 'Who do you really think you are ?',
                'answerType': 'many',
                'answers': {  
                  '0':{ 
                     'answer' : 'The person that is reading this' ,
                     'score' : 1 
                    },
                    '1': {
                      'answer' : 'Your parent\'s kid',
                       'score' : 1  
                    },  
                    '2':{ 
                      'answer': 'A question answerer',
                      'score' : 1 
                    },
                    '3' : {  
                      'answer': 'That other guy too' ,
                      'score' : 1 
                    },
                    '4':{
                      'answer' : 'A drunk programer' ,
                      'score' : 1 }
                    },
                'tags': [ 'basic' ],
                'explanation': 'You\'re anything but that other guy',
                'tip': 'no tip for that question: sort yourself out'
            },
            '1' : {
                'question': 'Chabada bada bada ?',
                'answerType': 'one',
                'answers': {  
                  '0':{ 
                     'answer' : 'Not really' ,
                     'score' : 1 
                    },
                    '1': {
                      'answer' : 'Absolutely',
                       'score' : 1  
                    },  
                    '2':{ 
                      'answer': 'Only on a friday',
                      'score' : 1 
                    }
                },
                'tags': [ 'basic' ],
                'explanation': 'Boud boud blabla',
                'tip': 'yes I\'ll give you a clue'
            }
        }
}



console.debug(`module name is: ${module.name}`);

console.debug('Initializing Firebase')
Firebase.initializeApp(FirebaseConfigs.quizzerDefaults);

//dbref.set(questions, (err, data) => console.debug(err||data||"Cassandra Data pushed!"))
//FirebaseRefs.testDataRef().set(testData, (err, data) => console.debug(err||data||'Data pushed!'))

ReactDOM.render(<ThemeWrapper />, document.getElementById('quizzer'));
