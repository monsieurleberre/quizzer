import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('loginPage');

/**
 * Other specific selectors
 */
const selectLogin = () => createSelector(
  selectLoginPageDomain(),
  (pageDomain) => pageDomain.get('login')
);

/**
 * Default selector used by LoginPage
 */

const selectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);

export default selectLoginPage;
export {
  selectLoginPageDomain,
  selectLogin,
};
