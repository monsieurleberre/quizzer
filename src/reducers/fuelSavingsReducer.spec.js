import expect from 'expect';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './fuelSavingsReducer';
import dateHelper from '../utils/dateHelper';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
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
    };
  };

  const getAppState = () => {
    return {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: false,
      savings: {
        monthly: 0,
        annual: 0,
        threeYear: 0
      }
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(getInitialState(), action)).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).toBe(expected); // Fails. Not deeply equal
  });

  it('should handle SAVE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, settings: getAppState() };
    const expected = Object.assign(getAppState(), {dateModified: dateHelper.getFormattedDateTime(new Date())});

    expect(reducer(getAppState(), action)).toEqual(expected);
  });

  it('should handle CALCULATE_FUEL_SAVINGS', () => {
    const action = { type: ActionTypes.CALCULATE_FUEL_SAVINGS, settings: getAppState(), fieldName: 'newMpg', value: 30 };

    const expectedMpg = 30;
    const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

    expect(reducer(getAppState(), action).newMpg).toBe(expectedMpg);
    expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  });
});
