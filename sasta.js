// import React,{useEffect, useState} from 'react';
// import { Button, View,Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const sasta = () => {

//     let s = [];
//     s['en'] = require("#/constants/Languages/english.json");
//     s['jpn'] = require("#/constants/Languages/japanese.json");
//     const [lang, setLang] = useState('en')
//     const handlePress = async () => {
//         try{
//             let ml = (lang === 'en' ? 'jpn' : 'en')
//             setLang(ml);
//             console.log(ml)
//             await AsyncStorage.setItem('language', ml);
//         }catch(err){
//             console.log(err)
//         }
//     }
//     useEffect(() => {
//         async function getData(){
//             const val = await AsyncStorage.getItem('language')
//             if(val!=null){
//                 setLang(val)
//                 console.log("+++++++++")
//                 console.log(val)
//                 console.log("_________")
//             }
//         }
//         try{
//             getData()
//             // alert("aiyyo  "+ val)
//         }catch(err){
//             console.log(err)
//         }
//     }, [])
//     return (
//         <View>
//             <Button 
//                 onPress={handlePress} 
//                 title="Learn More"
//                 color="#841584" />
//             <Text>
//                 {s[lang].description}
//             </Text>
//         </View>
//     )
// }
// export default sasta;
 