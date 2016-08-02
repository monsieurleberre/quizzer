import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a title called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('CardTitle').prop('title');
    const expected = 'About';

    expect(actual).toBe(expected);
  });

  // it('should have a card text child', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.find('CardText').child('className');
  //   const expected = 'alt-header';

  //   expect(actual).to. equal(expected);
  // });

  it('should link to an unknown route path', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
