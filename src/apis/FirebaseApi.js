//import Firebase from 'firebase';
import FirebaseMockApi from '../mocks/FirebaseMockApi';


//if (process.env.NODE_ENV === 'production') {
//module.exports = {FirebaseApi: Firebase};
const FirebaseApi = process.env.NODE_ENV === 'production'
  ? new FirebaseMockApi()
  : new FirebaseMockApi();
export default FirebaseApi;
// } else {
//   module.exports = {FirebaseApi: FirebaseMockApi};
// }