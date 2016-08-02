import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import FuelSavingsForm from './FuelSavingsForm';
import FuelSavingsTextInput from './FuelSavingsTextInput';
import FuelSavingsResults from './FuelSavingsResults';

describe('<FuelSavingsForm />', () => {
  it('should contain <FuelSavingsTextInput /> components', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const allInputs = wrapper.find(FuelSavingsTextInput);

    expect(allInputs.length).toBe(5);
    expect(allInputs.at(0).props().name).toBe('newMpg');
    expect(allInputs.at(0).props().value).toBe(fuelSavings.newMpg);
    expect(allInputs.at(1).props().name).toBe('tradeMpg');
    expect(allInputs.at(1).props().value).toBe(fuelSavings.tradeMpg);
    expect(allInputs.at(2).props().name).toBe('newPpg');
    expect(allInputs.at(2).props().value).toBe(fuelSavings.newPpg);
    expect(allInputs.at(3).props().name).toBe('tradePpg');
    expect(allInputs.at(3).props().value).toBe(fuelSavings.tradePpg);
    expect(allInputs.at(4).props().name).toBe('milesDriven');
    expect(allInputs.at(4).props().value).toBe(fuelSavings.milesDriven);
  });

  it('should contain options to change miles driven timeframe', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expectedOption1 = '<option value="week">Week</option>';
    const expectedOption2 = '<option value="month">Month</option>';
    const expectedOption3 = '<option value="year">Year</option>';

    expect(wrapper.find('select').childAt(0).html()).toBe(expectedOption1);
    expect(wrapper.find('select').childAt(1).html()).toBe(expectedOption2);
    expect(wrapper.find('select').childAt(2).html()).toBe(expectedOption3);
  });

  it('should contain <FuelSavingsResults /> when necessary conditions are met', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculateSavings: true,
      savings: {
        monthly: 10,
        annual: 120,
        threeYear: 360
      }
    };

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings}/>;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <FuelSavingsResults /> when necessary conditions are not met', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = () => {};
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);
    const expected = <FuelSavingsResults savings={fuelSavings.savings}/>;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should handle form submit', () => {
    const saveFuelSavings = createSpy();
    const calculateFuelSavings = () => {};
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(saveFuelSavings).toNotHaveBeenCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings.calls.length).toEqual(1);
  });

  it('should submit appState', () => {
    const saveFuelSavings = createSpy();
    const calculateFuelSavings = () => {};
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveFuelSavings).toHaveBeenCalledWith(fuelSavings);
  });


  it('should calculate fuel savings on text input change', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = createSpy();
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(calculateFuelSavings).toNotHaveBeenCalled();
    wrapper.find(FuelSavingsTextInput).first().simulate('change');
    expect(calculateFuelSavings.calls.length).toEqual(1);
  });

  it('should calculate fuel savings on miles driven timeframe change', () => {
    const saveFuelSavings = () => {};
    const calculateFuelSavings = createSpy();
    const fuelSavings = {
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

    const wrapper = shallow(<FuelSavingsForm
      saveFuelSavings={saveFuelSavings}
      calculateFuelSavings={calculateFuelSavings}
      fuelSavings={fuelSavings}
    />);

    expect(calculateFuelSavings).toNotHaveBeenCalled();
    wrapper.find('select').simulate('change', {target: {value: 'year'}});
    expect(calculateFuelSavings.calls.length).toEqual(1);
    expect(calculateFuelSavings.calls[0].arguments[2]).toBe('year');
  });
});
