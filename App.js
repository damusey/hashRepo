import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Sasta from './sasta';
import EvaLocalisation, { setLanguage,getLanguage, getLanguageContext } from './EvaLocalisation/EvaLocalisation';
import AllPath from './constants/AllPath';
import Broccoli from './Broccoli'

export default function App() {
  // const { lang,changeLang} = getLanguageContext()

  const [lang,setLang] = useState(getLanguage());
  useEffect(() => {
    async function getData() {
      const t = await getLanguage();
      setLang(t)

    }
    getData()
  }, [])
  const pressHandler = async (vaani) => {
    console.log("garr :",require("#/constants/Languages/english.json"))
    setLanguage(vaani)
    const t = await getLanguage();
    setLang(t);
  }
  return (
    <View style={styles.container}>
      {/* <Sasta /> */}
      <Text>{lang.gyaan} jk</Text>
      <Button
        onPress={()=>pressHandler('en')}
        title="English"
        color="#841584" />
        <Button
        onPress={()=>pressHandler('jpn')}
        title="Japanese"
        color="#841342" />
        <Text>
          {lang.description}
        </Text>
      <StatusBar style="auto" />
    </View>
    // <EvaLocalisation>
    //   <Broccoli />
    // </EvaLocalisation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
