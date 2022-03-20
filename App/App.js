
/*
* TODO: Fix Sign Up being raised
*
*
*
*/
import React, {useState} from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
const baseUrl = 'https://10.0.2.2:3000';
const App = () => {
  const [name, onChangeName] = useState("");
  const [password, onChangePassword] = useState("");
  
  const fetchUser = async () => {
    console.log([name, password]);
    axios.post(`http://10.0.2.2:3000/api/users/verify`, {
    name: name,
    password: password
    }).then((response) => {
      console.log(response.data); // response.data contains if user is true or false
    });
  };

  return(
    <SafeAreaView style = {styles.container}>
      <Image source ={require('./img/foodarlogo.png')}></Image>
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

      <TouchableOpacity style = {styles.login} onPress = {fetchUser}><Text style = {styles.loginText}>Login</Text></TouchableOpacity>
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
export default App;