
import React, {useState} from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {useNavigation} from "@react-navigation/native";
const baseUrl = 'http://10.0.2.2:3000';
class Login extends Component{
  render(){
  const {navigation} = this.props;
  }
}

export default function(props) {
  const navigation = useNavigation();
  const [name, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  const loginButton = () => {
    axios.post(`${baseUrl}/api/users/verify`, {
      name: name,
      password: password
    }).then((response) => {
      const resp = response.data;
      //log if user is true
      console.log(resp["isUser"]);
      //store data and change screen 
      if(resp["isUser"] == "true"){
        navigation.navigate("selectionScreen", 
        {id: resp["id"]});
        storeData(resp);
      }
      console.log(resp);
    }).catch((error) =>{
      console.log(error);
    }
    );
    }
  
  return(
    <SafeAreaView style = {styles.container}>
          <Image source ={require('../img/foodarlogo.png')}></Image>
          <Text style = {styles.title}>Foo<Text style = {styles.dar}/*<-- changes color of the dar */>dar</Text></Text>
          <TextInput style = {styles.input}
          placeholder = "Email" //Username  
          onChangeText={onChangeName}
          />

          <TextInput style = {styles.input}
          secureTextEntry = {true}
          placeholder = "Password" //Password
          onChangeText={onChangePassword}
          />

          <TouchableOpacity style = {styles.login} onPress = {loginButton} ><Text style = {styles.loginText}>Login</Text></TouchableOpacity>
          <Text>Don't have an account? <TouchableOpacity><Text style ={styles.dar}>Sign Up</Text></TouchableOpacity></Text>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dar: {
    //color: #rrggbbaa
    color: '#FF000090',
    opacity: 50,
    
  },
  login: {
    backgroundColor: "#FF000090",
    marginTop:10,
    marginBottom: 10,
    height: 50,
    width: 184,
    borderRadius: 100,
    alignItems: 'center',
    padding: 14, 
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  title: {
    fontSize: 64,
    fontFamily: "sans-serif"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
      width: 300,
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius:100,
      fontSize:14
  }
});