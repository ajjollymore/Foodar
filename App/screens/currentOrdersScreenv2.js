import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const baseUrl = 'https://eceipersonaltest.herokuapp.com';//http://10.0.2.2:5000
var resp;
class currentOrdersScreen extends React.Component {
  render() {
    const {navigation} = this.props;
  }
}

export default function(props) {
  //hook for current state of the board
  const [result, setResult] = useState([]);
  //lets me use props(Not sure if its even used atm)
  const navigation = useNavigation();
  //this renders only when the screen is loaded
  useEffect(() => {
    const interval =setInterval(()=>{
      axios.get(`${baseUrl}/api/table`).then((res) => {
        setResult(res.data);
      });
    },1000);
    return () => clearInterval(interval);
  }, []);
//dynamically renders the board
  const board = () =>{
    try{
    if(!result){
      board(); 
    }  
    return result.map((element) => {
      var myPicture;
      //links sql query to images
    switch(element.location){
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
    const deliver = (receiptnum) => {
      console.log(receiptnum);
      axios.delete(`${baseUrl}/api/table/${receiptnum}`, {
        receiptnum: receiptnum
      }).then((res) =>{console.log(res.data)});
    }
    //boilerplate for each Location
      return(
        <View>
          <View style = {styles.containerRow}>
                <Image source = {myPicture}></Image>
                  <View>
                    <Text>
                      Time: {element.pickuptime}
                    </Text>
                  <Text>
                Drop Off: {element.dropoff} Hall
              </Text>
            </View>
            <TouchableOpacity style = {styles.deliver} onPress ={() => {deliver(element.receiptnum)}}><Text style = {styles.deliverText}>Deliver</Text></TouchableOpacity>
          </View>
          <View style = {styles.seperationLine}/>
        </View>
      )
    })
  }catch(error){}
  }
  //boilerplate for the rest
  return(
    <SafeAreaView>
      <View style = {styles.arrow}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Image source = {require('../img/arrow.png')}></Image>
        </TouchableOpacity>
        </View>
      <Text style = {styles.title}>Current Orders</Text>
      <View style={{height: '78 %'}}>
      <ScrollView>
        <View style = {styles.containerColumn}>
          {board()}
          </View>
      </ScrollView>
      </View>
      <View  style ={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style = {styles.myOrders}><Text style = {styles.loginText}>My Orders</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
//old code(unused)
/*
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
*/
const styles = StyleSheet.create({
  arrow: {
    marginTop: 20,
    marginLeft: 20
  },
  myOrders: {
    backgroundColor: "#90455090",
    marginTop:10,
    marginBottom: "-10%",
    height: 50,
    width: 184,
    borderRadius: 100,
    alignItems: 'center',
    padding: 14, 
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 25
  },

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    width: 400,
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
    height: 1,
    width: 350
  }
});