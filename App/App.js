
/*
* TODO: Fix Sign Up being raised
*
*
*
*/
import React, {useState} from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import selectionScreen from "./screens/selectionScreenv2";
import Login from "./screens/login";
import currentOrdersScreen from "./screens/currentOrdersScreenv2"
const baseUrl = 'https://10.0.2.2:3000';
    
    const fetchUser = async () => {
      console.log([name, password]);
      axios.post(`http://10.0.2.2:3000/api/users/verify`, {
      name: name,
      password: password
      }).then((response) => {
        console.log(response.data); // response.data contains if user is true or false
      });
    };

const Stack = createStackNavigator();

function NavStack(){
    return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name = "login"
          component={Login}
        />
        <Stack.Screen
          name = "selectionScreen"
          component={selectionScreen}/>
        <Stack.Screen
          name = "currentOrdersScreen"
          component={currentOrdersScreen}/>
      </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <NavStack/>
      </NavigationContainer>
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