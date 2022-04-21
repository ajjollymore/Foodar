import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
class selectionScreen extends React.Component{
  render() {
    const {naviation} = this.props;
  }
}
export default function({route}) {
  const navigation = useNavigation();
  return(
    <View>
      <Text style = {styles.title}>Would you like to...</Text>
      <View style = {styles.containerRow}>
        <View style = {styles.containerColumn}>
          <TouchableOpacity onPress={() => {navigation.navigate("currentOrdersScreenCourier")}}>
          <Text style = {styles.deliverAndOrder}>Deliver</Text>
          <Image source = {require('../img/courier.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style = {styles.containerColumn}>
          <TouchableOpacity onPress={() => {navigation.navigate("currentOrdersScreenClient",{id : route.params.id})}}>
            <Text style = {styles.deliverAndOrder}>Order</Text>
            <Image source = {require('../img/client.png')}></Image>
          </TouchableOpacity>
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
    marginTop: 275,
    color: '#000000'
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
    fontSize: 30,
    color: '#000000'
  }
});
