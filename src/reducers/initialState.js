import {sampleQuestions} from '../constants/sampleQuestions';
import {fromJS, Map} from 'immutable';


let initialState = Map({});
initialState = 
fromJS({ 
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
    fetchAuthDataReducer:{
      fetchedData: null,
      error: null,
      isFetching: false
    },
    otherLoginReducer: {
      expired: false
    }
  }
});
console.log(initialState);
console.log(initialState.get('login'));
export default initialState;
