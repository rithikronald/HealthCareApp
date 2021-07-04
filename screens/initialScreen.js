import * as React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors'


export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.containerStyle}>
      <Image source={require('../assets/images/BloodFlow.png')}  style={styles.imageStyle} />
      <Text style={styles.textStyle}>Visualize blood flow using PPG Graph and get all metrics justusing your iPhone for FREE!</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('onBoardingScreen')}}>
        <Text style={styles.buttonTextStyle}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor
  },
  imageStyle: {
    width:'100%',
    height:"60%",
    marginTop:'10%'
  },
  textStyle: {
    fontFamily:'DMSans-Regular',
    fontSize:22,
    padding:'4%',
    textAlign:'center',
    marginTop:"8%"
  },
  buttonStyle:{
    width:'80%',
    height:50,
    backgroundColor:colors.button,
    alignSelf:'center',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'4%'
  },
  buttonTextStyle:{
    color:colors.textColorLight,
    fontFamily:'DMSans-Medium',
    fontSize:18
  }
  
});