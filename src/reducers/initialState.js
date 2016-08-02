import {sampleQuestions} from '../constants/sampleQuestions';

export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  quizzPlayer: {
    questions: sampleQuestions,
    currentQuestionIndex: 0,
  },
  login :{
    user: null,
  }
};
