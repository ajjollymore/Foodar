import React from 'react';
import { Text, View,StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
export default function App(){
return (
<SafeAreaView>
<View style = {styles.arrow}>
        <Image source = {require('../img/arrow.png')}></Image></View>


<Text style = {styles.title}>Find your Delicious Food</Text>
<View style = {styles.containerRows}>
<Image source = {require('../img/flipit.png')}></Image>
</View>
<View style = {styles.containerRows}>
<Image source = {require('../img/timhortons.png')}></Image>
<Image source = {require('../img/lazy.png')}></Image></View>
<View style = {styles.loco}>
        <Image source = {require('../img/loco3.png')}></Image></View>




</SafeAreaView>

)
}



const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50
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

  
 
  arrow: {
      marginTop: 20,
      marginLeft: 20
    },
  flipit: {
          flex: 1,
          marginTop: 20,
          paddingTop:40,
          marginLeft: 20,
          flexDirection:'row',
          justifyContent: 'space-between'


        },
   timhortons: {
         marginTop: 20,
         marginLeft: 20
       },
   boosterjuice: {
         marginTop: 100,
             marginLeft: 80
       },
   lazy: {
       flex: 1,
       marginTop: 120,
       paddingTop:40,
       marginLeft: 20,
       flexDirection:'row',
       alignItems:'center',
       justifyContent: 'space-between'
       },
   loco: {

    marginTop: 80,
    marginLeft: 105

       },
   pitapit: {
            flex: 1,
          marginTop: 20,
         paddingTop:40,
         marginLeft: 20,
        flexDirection:'row',
        justifyContent: 'space-between'
       },
     containerRows: {
     marginTop:30,
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       height: 100,
       width: 400
     },


});
