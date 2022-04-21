import { useNavigation } from '@react-navigation/native';
import { TestScheduler } from 'jest';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';


const App = ({route}) => {
  const navigation = useNavigation();
  return(
    <SafeAreaView style= {styles.container}>
      <View style = {styles.arrow}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Image source = {require('../img/arrow.png')}></Image>
        </TouchableOpacity>
        </View>
      <Text style = {styles.title}>Find your Delicious Food</Text>
      <View style = {styles.location}>
        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'lazy',
          id: route.params.id
        })}}><Image source={require('../img/lazy.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'loco'
        })}}><Image source={require('../img/loco3.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'timhortons'
        })}}><Image source={require('../img/timhortons.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'flipit'
        })}}><Image source={require('../img/flipit.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
                  paramKey: 'boosterjuice'
        })}}><Image source={require('../img/boosterjuice.png')}></Image></TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'pitapit'
        })}}><Image source={require('../img/pitapit.png')}></Image></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  arrow: {
    marginTop: 20,
    marginLeft: 20
  },
  title: {
    fontSize: 30,
    marginTop: 0,
    marginLeft: 25
  },
  subtitle:{
    fontSize: 30,
    fontFamily: "sans-serif",
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width: '45%',
    height: '30%',
    padding:"5%",
    margin:"1%",
    borderWidth:1,
    borderColor: '#00000006'
  },
  location: {
    marginTop:'15%',
    padding:'2%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap',
    flexDirection:'row',
  },
  container: {
    flex: 1,
  },
  dar: {
    //color: #rrggbbaa
    color: '#FF000090',
    opacity: 50,
    
  }
});

export default App;