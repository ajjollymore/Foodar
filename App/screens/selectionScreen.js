import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';

const App = () => {
  return(
    <View>
      <Text style = {styles.title}>Would you like to...</Text>

      <View style = {styles.containerRow}>
        <View style = {styles.containerColumn}>
          <Text style = {styles.deliverAndOrder}>Deliver</Text>
          <Image source = {require('./img/courier.png')}></Image>
        </View>

        <View stlye = {styles.containerColumn}>
          <Text style = {styles.deliverAndOrder}>Order</Text>
          <Image source = {require('./img/client.png')}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    margin: 100
    
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 200
  },

  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deliverAndOrder: {
    fontSize: 30
  }
});

export default App;