import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import FuelSavingsTextInput from './FuelSavingsTextInput';

describe('<FuelSavingsTextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: createSpy(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toBe(expected);
  });

  it('should handle change', () => {
    const props = {
      name: 'newMpg',
      onChange: createSpy(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<FuelSavingsTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toBe(expected);
    expect(props.onChange).toNotHaveBeenCalled();
    wrapper.simulate('change', {target: {value: 101}});
    expect(props.onChange).toHaveBeenCalledWith('newMpg', 101);
  });
});
