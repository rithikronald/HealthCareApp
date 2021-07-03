import React,{useState} from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'


export default function Screen4({ navigation }) {
  const [date, setDate] = useState(new Date())
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.mainTextStyle}>When you were born?</Text>
      <Text style={styles.subTextStyle}>Date of birth will we used to calcuate your age</Text>
      <DatePicker
      date={date}
      onDateChange={setDate}
      />
      <Text style={styles.mainTextStyle}>Your Gender?</Text>
      <Text style={styles.subTextStyle}>Please enter your gender</Text>
      <View style={styles.genderButtonContainer}>
        <TouchableOpacity style={styles.genderButtonStyle} onPress={()=>{}}>
            <Text style={styles.genderButtonTextStyle}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderButtonStyle,{backgroundColor:colors.textColorMedium}]} onPress={()=>{}}>
            <Text style={styles.genderButtonTextStyle}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.mainTextStyle}>Your Current Weight?</Text>
      <View style={styles.weightContainer}>
            <Icon name="pluscircle" size={25} color={colors.button} />
            <TextInput keyboardType="number-pad" style={styles.weightInputStyles} />
            <Icon name="minuscircle" size={25} color={colors.button} />
      </View>
      <TouchableOpacity style={{alignSelf:'center'}}>
          <Text style={{fontFamily:'DMSans-Regular',fontSize:14,color:colors.button}}>Prefer lbs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
    justifyContent:'space-around'
  },
  imageStyle: {
    width:'100%',
    height:"70%"
  },
  mainTextStyle: {
    fontFamily:'DMSans-Medium',
    fontSize:20,
    padding:'4%',
    textAlign:'center'
  },
  subTextStyle:{
    fontFamily:'DMSans-Regular',
    fontSize:14,
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
    marginTop:'4%'
  },
  buttonTextStyle:{
    color:colors.textColorLight,
    fontFamily:'DMSans-Medium',
    fontSize:18
  },
  genderButtonContainer:{
    flexDirection:'row',
    justifyContent:"space-around"   
  },
  genderButtonStyle:{
    width:'30%',
    height:50,
    backgroundColor:colors.button,
    alignSelf:'center',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'4%'
  },
  genderButtonTextStyle:{
    color:colors.textColorLight,
    fontFamily:'DMSans-Regular',
    fontSize:16
  },
  weightContainer:{
    alignItems:'center', 
    justifyContent:'space-around',
    flexDirection:'row' 
  },
  weightInputStyles:{
        width:'40%',
        borderWidth:2,
        borderColor:colors.button,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:16,
        fontFamily:'DMSans-Medium'
  },
});