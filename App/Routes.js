import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from '@react-navigation/native';
import Login from "./screens/currentOrdersScreen.js";
import orderScreen from "./screens/currentOrdersScreen.js";
const Project= createStackNavigator({
  Login: {
   screen: Login
  },
  orderScreen: {
   screen: orderScreen
  }
});
export default createAppContainer(Project);