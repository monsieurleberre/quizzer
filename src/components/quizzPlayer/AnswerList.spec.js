// import React from 'react';
// import {shallow} from 'enzyme';
// import {expect} from 'chai';
// import AnswerList from './AnswerList';
// import {ONE, MANY} from '../../constants/answerTypes';
// import {sampleQuestions} from '../../constants/sampleQuestions';



// describe('<AnswerList />', () => {
//     it('should give Checkboxes for questions with many answers', () => {

//         const answers = sampleQuestions['0'].answers;
//         const answerType = sampleQuestions['0'].answerType;
//         expect(answerType).to.equal(MANY);

//         const wrapper = shallow(<AnswerList answerType={answerType} answers={answers}/>);
//         const checkBoxes = wrapper.find('Checkbox');

//         expect(checkBoxes).to.have.length(5);
//     });

//     it('should give RadioButtons for questions with a single answer', () => {

//         const answers = sampleQuestions['1'].answers;
//         const answerType = sampleQuestions['1'].answerType;
//         expect(answerType).to.equal(ONE);

//         const wrapper = shallow(<AnswerList answerType={answerType} answers={answers}/>);
//         const radioButtons = wrapper.find('RadioButton');

//         expect(radioButtons).to.have.length(3);
//     });

// });
