import Firebase from 'firebase';
import FirebaseConfigs from './FirebaseConfigs'

class FirebaseRefs {

    static cassandraRef() { return Firebase.database().ref("cassandraQuizzData") };
    static testDataRef() { return Firebase.database().ref("testData") };
};

export default FirebaseRefs;