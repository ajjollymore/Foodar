import { useNavigation } from '@react-navigation/native';
import { TestScheduler } from 'jest';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';


const App = ({route}) => {
  const navigation = useNavigation();
  return(
    <SafeAreaView style= {styles.container}>
      <Text style = {styles.title}>Foo<Text style = {styles.dar}/*<-- changes color of the dar */>dar</Text></Text>
      <Text style = {styles.subtitle}>Client</Text>
      <View style = {styles.location}>
        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'lazy',
          id: route.params.id
        })}}><Image source={require('../img/lazy.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'loco'
        })}}><Image source={require('../img/loco.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'timhortons'
        })}}><Image source={require('../img/timhortons.png')}></Image></TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = {() => {navigation.navigate("orderCreationScreen", {
          paramKey: 'flipit'
        })}}><Image source={require('../img/flipit.png')}></Image></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  subtitle:{
    fontSize: 30,
    fontFamily: "sans-serif",
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width: 180,
    height: 180,
    padding:45,
    margin:5,
    borderWidth:1,
    borderColor: '#00000006'
  },
  location: {
    flexWrap:'wrap',
    flexDirection:'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    fontFamily: "sans-serif",
  },
  dar: {
    //color: #rrggbbaa
    color: '#FF000090',
    opacity: 50,
    
  }
});

export default App;