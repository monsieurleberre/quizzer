import Firebase from 'firebase';
import FirebaseMockApi from '../mocks/FirebaseMockApi';

if (process.env.NODE_ENV === 'production') {
  module.exports = {FirebaseApi: Firebase};
} else {
  module.exports = {FirebaseApi: FirebaseMockApi};
}