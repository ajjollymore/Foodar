import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TimePicker, ValueMap} from 'react-native-simple-time-picker';
import axios from 'axios';
const baseUrl = 'https://eceipersonaltest.herokuapp.com';

const App = ({route}) => {
  const navigation = useNavigation();
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [orderNum, setOrderNum] = useState("");
  const [res, setRes] = useState("");
  const handleChange = ({value}) =>{
    setHours(value.hours)
    setMins(value.minutes)
  }
  function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }
  const createOrder = () =>{
    let hrs = hours.hours;
    let min = hours.minutes;
    if(hrs < 10){
      hrs = "0"+hrs;
    }
    if(min < 10){
      min = "0"+min
    }
    axios.post(`${baseUrl}/api/table`, {
      id: route.params.id,
      pickuptime: `${hrs}:${min}`, 
      location: `${route.params.paramKey}`,
      dropoff: `${res}`,
      receiptnum: `${orderNum}`
    }).then((res) => {
      navigation.navigate("customerConfirmationScreen")
    }
    )
  }

return (
  <SafeAreaView style = {styles.container}>
    <View>
    <Text style = {styles.title}>Foo<Text style = {styles.dar}/*<-- changes color of the dar */>dar</Text></Text>
    </View>
    <View>
      <Text style={styles.text}>When Should We Get Your Food?</Text>
      <TimePicker
        onChange={(hours, minutes) => {
          setHours(hours);
          setMins(minutes);
        }}
        isAmpm
      />
    </View>
    <Text style={styles.text}>Order Number?</Text>
    <TextInput
      style = {styles.input}
      maxLength={4}
      keyboardType = 'numeric'
      onChangeText={setOrderNum}
    ></TextInput>
    <Text style = {styles.text}>What Residence?</Text>
    <TextInput
      style = {styles.input}
      onChangeText = {setRes}
    />
    <TouchableOpacity style = {styles.order} onPress = {createOrder}><Text style = {styles.orderText}>Delivery</Text></TouchableOpacity>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    backgroundColor: "#FF000090",
    marginTop:90,
    marginBottom: 10,
    height: 60,
    width: 204,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14, 
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'ivory'
  },
  input: {
    width: 300,
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius:100,
    fontSize:14
},
  text: {
    fontSize: 18,
    margin:40,
    marginBottom:20
  },
  title: {
    marginBottom:30,
    fontSize: 64,
    fontFamily: "sans-serif",
  },
  dar: {
    //color: #rrggbbaa
    color: '#FF000090',
    opacity: 50,
    
  }
})
export default App;