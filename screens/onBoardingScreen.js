import * as React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import colors from '../assets/colors/colors'
import OnBoarding from '../components/OnBoarding';


export default function OnBoardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <OnBoarding onPress={()=>navigation.navigate('subscriptionScreen')} />
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('subscriptionScreen')}>
        <Text style={styles.buttonTextStyle}>START FREE TRAIL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.backgroundColor
  },
  imageStyle: {
    width:'100%',
    height:"60%"
  },
  textStyle: {
    fontFamily:'DMSans-Regular',
    fontSize:18,
    padding:'4%',
    textAlign:'center'
  },
  buttonStyle:{
    width:'80%',
    height:50,
    backgroundColor:colors.button,
    alignSelf:'center',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    margin:'6%'
    
  },
  buttonTextStyle:{
    color:colors.textColorLight,
    fontFamily:'DMSans-Medium',
    fontSize:18,
  }
  
});