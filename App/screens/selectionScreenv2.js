import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

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
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 275
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 350
  },

  containerColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  deliverAndOrder: {
    fontSize: 30
  }
});

export default App;