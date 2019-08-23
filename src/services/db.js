import { AsyncStorage } from '@react-native-community/async-storage';

const db = {

    get(key){
        try {
            const value = AsyncStorage.getItem(key.toString())
            return value
        } catch (e) {
            return 'error ' + e
        }
    },
    getAllKeys(){
        try {
            const value = AsyncStorage.getAllKeys()
            return value            
            //alert(value)

        } catch (e) {
            return e
        }
    },

    save(key, value){ //Retorna a chamada do bd

        try {
            return AsyncStorage.setItem(key.toString(), value)
        } catch (e) {
            return e
        }
    },

    update(key, value){

        try{
            return AsyncStorage.mergeItem(key.toString(), value)        
        }catch(e){
            return e
        }
    },
    
    clearAll(){
        AsyncStorage.clear()
    },

    del(key){
        try{
            return AsyncStorage.removeItem(key.toString())        
        }catch(e){
            return e
        }
    }
}

export default db