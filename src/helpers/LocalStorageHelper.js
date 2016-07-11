class LocalStorageHelper {
    constructor(){

    }

    static appPrefixKey = "quizzer.app-web."

    static prefixKey = (key) => appPrefixKey + key.toString

    static setItem = (key, item) => {
        let prefixedKey = prefixKey(key);
        console.debug(`persisting object with key ${prefixedKey}`)
        localStorage.setItem(prefixedKey, item);
    }

    static getItem = (key) => {
        let prefixedKey = prefixKey(key);
        console.debug(`getting object with key ${prefixedKey}`)
        return localStorage.getItem(prefixedKey);
    }
}

export default LocalStorageHelper;