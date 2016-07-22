import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import AnswerList from './AnswerList';
import {ONE, MANY} from '../../constants/answerTypes';
import {sampleQuestions} from '../../constants/sampleQuestions';



describe('<AnswerList />', () => {
    it('should give Checkboxes for questions with a many answers', () => {

        const answers = sampleQuestions.questions['0'].answers;
        const answerType = sampleQuestions.questions['0'].answerType;
        expect(answerType).to.equal(MANY);

        const wrapper = shallow(<AnswerList answerType={answerType} answers={answers}/>);
        const radioButtons = wrapper.find('Checkbox');

        expect(radioButtons).to.have.length(3);
    });

    it('should give RadioButtons for questions with a single answer', () => {

        const answers = sampleQuestions.questions['1'].answers;
        const answerType = sampleQuestions.questions['1'].answerType;
        expect(answerType).to.equal(ONE);

        const wrapper = shallow(<AnswerList answerType={answerType} answers={answers}/>);
        const radioButtons = wrapper.find('RadioButton');

        expect(radioButtons).to.have.length(3);
    });

});
