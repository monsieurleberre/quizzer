import Firebase from 'firebase';
import FirebaseConfigs from './FirebaseConfigs'

class FirebaseRefs {

    static cassandraRef() { return Firebase.database().ref('cassandraQuizzData') };
    static testDataRef() { return Firebase.database().ref('testData') };
    static questionsRef() { return Firebase.database().ref('testData') };
    static currentUser() { return Firebase.auth().currentUser };
};

export default FirebaseRefs;