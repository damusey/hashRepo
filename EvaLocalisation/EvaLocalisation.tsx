import { createContext, FC, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AllPath from '../constants/AllPath';
const basePath = "#/constants/Languages/";
const initialState = require("#/constants/Languages/english.json")

// export const LanguageContext = createContext(null)

// const EvaLocalisation:FC = ({children}) => {

//     const [lang, setLang] = useState(AllPath.Paths.en)
//     const changeLang = (cLang) => {
//         setLang(AllPath.Paths[cLang]);
//     }

//     return (
//         <LanguageContext.Provider value={{lang,changeLang}}>
//             {children}
//         </LanguageContext.Provider>
//     )
// }

// export const getLanguageContext = () => useContext(LanguageContext)

// export default EvaLocalisation


export const setLanguage = (lName:string) => {
    AsyncStorage.setItem('language',lName);
}

export const getLanguage = async () => {
    try{
        const key = 'description'
        const v = await AsyncStorage.getItem('language')
        console.log("---( )---")
        console.log(AllPath.Paths[v][key])
        console.log("---{ }---")
        if(v===null){
            return AllPath.Paths['en']
        }
        return AllPath.Paths[v];
    }catch(err){
        console.log(err)
    }
    
    
}