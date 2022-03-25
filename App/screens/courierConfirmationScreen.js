import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

const App = () => {
  return(
    <View>
      <View style = {styles.home}>
        <Image source = {require('./img/home.png')}></Image></View>

      <View style = {styles.confirmed}>
        <Image source = {require('./img/checkmark.png')}></Image></View>

      <Text style = {styles.title}>Please deliver to specified location!</Text></View>
  )
}

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
    marginLeft: 20
  },

  confirmed: {
    alignItems: 'center',
    marginTop: 200,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    padding: 50
  },

});

export default App;