import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { appColors } from '../../data/color';
import { STATUSBAR_HEIGHT } from '../../../constans';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FluidDrawerNative from '../../componets/FluidDrawerNative';

const ChooseScreen = () => {
  const [active, setActive] = useState(false)
  const [manual, setManual] = useState([["", ""]])
  const numberOFfrind = 0
  useEffect(() => {
    const getLocal = async () => {
      try {
        const storge = await AsyncStorage.getItem("friend")
        numberOFfrind = JSON.parse(storge).length
      } catch (e) {
        console.log(e)
      } finally {

      }
    }
  }, [])
  const handelContact = () => {

  }
  const onEndEditing = () => {
    // const newItem = ["",""];
    // if(manual[-1][0]!=""){
    //   setManual(prevItems => [...prevItems, newItem]);
    // }
  }
  
  const changeManuel = (e, rowIndex, colIndex) => {
    setManual(prevGrid => {
      return prevGrid.map((row, rIndex) =>
        rIndex === rowIndex ? row.map((cell, cIndex) =>
          cIndex === colIndex ? e : cell
        ) : row
      );
    });
  }
  return (
    <LinearGradient
      colors={[appColors.violet, appColors.blue]}
      {...deg(180)}
      style={styles.body}>
      <Text style={styles.titel}>step 1 of 3</Text>
      <View style={styles.logo}></View>
      <View style={styles.cont}>
        <Text style={styles.titel}>build your fabriq</Text>
        <Text style={{ color: "white", textAlign: "center" }}>asda sdas das d ssdg fdg
          dfgdf g
          df gd gfdgdfgdf gdfgdfgdfgdfgdfgdfgdf asda sdas das d ssdg fdg
          dfgdf g
          df gd gfdgdfgdf gdfgdfgdfgdfgdfgdfgdf
        </Text>
        <TouchableOpacity onPress={handelContact} style={{ alignSelf: "stretch" }}>
          <LinearGradient
            colors={[appColors.yellow, appColors.darkGray]}
            {...deg(180)}
            style={styles.butt}>
            <Text style={{ fontSize: 20, color: "white", fontFamily: "UbuntuLight" }}>add from contact</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 30, alignItems: "center" }}>
        <Text style={{ color: "white" }}>{150 - numberOFfrind} spot remainig in your circile</Text>
        <TouchableOpacity onPress={() => setActive(true)} style={{ borderWidth: 2, borderColor: appColors.blue }}>
          <Text style={{ fontSize: 22, color: appColors.violet, fontFamily: "UbuntuLight" }}>add manual</Text>
        </TouchableOpacity>
      </View>
      {/* <FluidDrawerNative open={active} onClose={() => setActive(false)}>
        <ScrollView style={{flex:1,minHeight:100}}>
          {manual.map((e,i) => {
            return (
              <View key={i} style={{ padding: 20, flexDirection: "row", alignContent: "center", justifyContent: "space-between", gap: 10 }}>
                <TextInput style={styles.input} value={manual[i][0]}   onChangeText={(e) => changeManuel(e, i, 0)} />
                <TextInput style={styles.input} value={manual[i][1]} onChangeText={(e) => changeManuel(e, i, 1)}/>
              </View>
            )
          })}
        </ScrollView>
      </FluidDrawerNative> */}
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    paddingTop: STATUSBAR_HEIGHT
  },
  logo: {
    height: 150,
    width: "100%",
    backgroundColor: "green"
  },
  cont: {
    alignItems: "center",
    padding: 40,
    gap: 20,
    marginBottom: 50
  },
  titel: {
    fontSize: 25,
    color: "white",
    fontFamily: "UbuntuLight",
    marginBottom: 10,
    padding: 10
  },
  butt: {
    width: "100%",
    borderRadius: 50,
    padding: 10,
    alignItems: "center"
  },
  input: {
    flex: 1,
    padding: 20,
    backgroundColor: "red",
    borderRadius: 40
  }
})
export default ChooseScreen