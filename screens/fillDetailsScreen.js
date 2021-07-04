import React,{useState} from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'


export default function FillDetailsScreen({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [weight,setWeight] = useState(0)
  const [weightType,setWeightType] = useState("kgs")
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.mainTextStyle}>When you were born?</Text>
      <Text style={styles.subTextStyle}>Date of birth will we used to calcuate your age</Text>
      <DatePicker
      date={date}
      mode="date"
      androidVariant='nativeAndroid'
      textColor={colors.button}
      onDateChange={setDate}
      style={{alignSelf:"center"}}
      />
      <Text style={styles.mainTextStyle}>Your Gender?</Text>
      <Text style={styles.subTextStyle}>Please enter your gender</Text>
      <View style={styles.genderButtonContainer}>
        <TouchableOpacity style={styles.genderButtonStyle} onPress={()=>{}}>
            <Text style={styles.genderButtonTextStyle}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderButtonStyle,{backgroundColor:"#D1D1D1"}]} onPress={()=>{}}>
            <Text style={styles.genderButtonTextStyle}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.mainTextStyle}>Your Current Weight?</Text>
      <View style={styles.weightContainer}>
            <Icon name="pluscircle" size={40} color={colors.button} onPress={()=>{setWeight(weight+1)}} />
            <TextInput defaultValue={`${weight} ${weightType}`} keyboardType="number-pad" style={styles.weightInputStyles} />
            <Icon name="minuscircle" size={40} color={colors.button} onPress={()=>{weight != 0?setWeight(weight-1):null}} />
      </View>
      <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>weightType =="kgs"?setWeightType("lbs"):setWeightType("kgs")}>
          <Text style={{fontFamily:'DMSans-Regular',fontSize:14,color:colors.button,marginTop:'3%'}}>Prefer {weightType == "kgs"?"lbs":"kgs"}</Text>
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
    justifyContent:'space-around',
    paddingVertical:'8%'
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
    justifyContent:'center',       
  },
  genderButtonStyle:{
    width:'30%',
    height:50,
    backgroundColor:colors.button,
    alignSelf:'center',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'4%',
    marginHorizontal:'4%'
  },
  genderButtonTextStyle:{
    color:colors.textColorLight,
    fontFamily:'DMSans-Regular',
    fontSize:16
  },
  weightContainer:{
    alignItems:'center', 
    justifyContent:'center',
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
        fontSize:18,
        fontFamily:'DMSans-Medium',
        marginHorizontal:"4%"
  },
});