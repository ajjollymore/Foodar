import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
const orderBox = (time, hall,location) => {
  var myPicture;
  switch(location){
    case'flipit':
      myPicture = require('../img/flipit.png');
      break;
    case'lazy':
      myPicture = require('../img/lazy.png');
      break;
    case'loco':
     myPicture = require('../img/loco.png');
      break;
    case'timhortons':
      myPicture = require('../img/timhortons.png');
      break;
  }
  return( 
    <View>
    <View style = {styles.containerRow}>
    <Image source = {myPicture}></Image>
    <View>
      <Text>
      Time: {time}
      </Text>
      <Text>
      Drop Off: {hall} Hall
      </Text>
    </View>
    <TouchableOpacity style = {styles.deliver}><Text style = {styles.deliverText}>Deliver</Text></TouchableOpacity>
  </View>
  <View style = {styles.seperationLine}/>
  </View>
  );
}
const App = () => {
  return(
    <SafeAreaView style= {{flex:1}}>
    <Text style = {styles.title}>Current Orders</Text>
          <ScrollView contentContainerStyle = {{flexGrow: 1, height: '50%'}}>
            <View style={{height:80}}>
            <View style = {styles.containerColumn}>
            <View style = {styles.seperationLine}/>
              {orderBox('----','lenny','loco')}
              {orderBox('----','lenny','lazy')}
              {orderBox('----','lenny','timhortons')}

              </View>
            </View>
          </ScrollView>
        
        <View>
        <TouchableOpacity style = {styles.login}><Text style = {styles.loginText}>Login</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },login: {
    backgroundColor: "#FF000090",
    marginTop:10,
    marginBottom: 10,
    height: 50,
    width: 184,
    borderRadius: 100,
    alignItems: 'center',
    padding: 14, 
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    width: 400
  },

  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliver: {
    backgroundColor: "#FF000090",
    marginTop:10,
    marginBottom: 10,
    height: 50,
    width: 90,
    borderRadius: 100,
    alignItems: 'center',
    padding: 14, 
  },
  deliverText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  seperationLine: {
    backgroundColor: '#000000',
    height: 2,
    width: 400
  }
});

export default App;