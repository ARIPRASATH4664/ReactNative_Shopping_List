import { MMKV } from 'react-native-mmkv'

var storage= new MMKV(); 

export const getStorageInstance = () => {
    if(storage) {
        return storage;
    } else{
        storage = new MMKV();
        return storage;
    }
}
    
export const setStorage = (storage: MMKV, key: string, value: string) => {
    console.log("SUCK!!! ~ setStorage ~ storage: MMKV, key: string, value: string:", storage, key, value)

    storage.set(key, value)
}

export const getStorage = (storage: MMKV, key: string) : string => {
    if(storage.contains(key)) {
        const data = storage.getString(key)
        if(data) {
            console.log("SUCK!!! ~ getStorage ~ data:", data)
            return data;
        }

    } 
    return JSON.stringify([]);
}