import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {FuelSavingsPage} from './FuelSavingsPage';
import FuelSavingsForm from '../components/FuelSavingsForm';

describe('<FuelSavingsPage />', () => {
  it('should contain <FuelSavingsForm />', () => {
    const actions = {
      saveFuelSavings: () => { },
      calculateFuelSavings: () => { }
    };
    const fuelSavings = {};
    const wrapper = shallow(<FuelSavingsPage actions={actions} fuelSavings={fuelSavings}/>);

    expect(wrapper.find(FuelSavingsForm).length).toBe(1);
  });
});
