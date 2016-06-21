jest.unmock('../../src/components/Login.jsx')
import Login from '../../src/components/Login.jsx'

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Login', () => {
  it('has a router', () => {
    // Render a Login in the document
    const login = TestUtils.renderIntoDocument(
      <Login />
    );

    const loginNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's not null
    expect(loginNode.router).not.toBeNull();
  });
});