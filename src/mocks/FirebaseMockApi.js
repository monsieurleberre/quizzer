import delay from './delay';

class Firebase {
    constructor() { }
    auth() {
        return {
            signInWithEmailAndPassword: (email, password) => {
                console.log(`signing in with email ${email} and password ${password}`);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (!email || !password) reject('invalid email or password');
                        resolve({ user: `signed in with email ${email} and password ${password}` });
                    }, delay);
                });
            }
        }
    }

}
export default Firebase;
