import * as React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'


export default function Card(props,{ navigation }) {
  return (
    <>
        <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={[styles.titleText,{color:props.color}]}>{props.title}</Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
                    <Text style={styles.clickText}>Check Now</Text>
                    <Icon name="right" size={18} />
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={props.image} resizeMode="contain" style={{width:50,height:50,alignSelf:'center'}} />
            </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    width:'100%',
    elevation:16,
    backgroundColor:colors.backgroundColor,
    padding:'3%',
    flexDirection:'row',
    marginVertical:'4%',
    borderRadius:6,
    height:Dimensions.get('window').height/6,
    shadowColor:"#6c757d",
    
  },
  textContainer:{
    flex: 3,
    justifyContent:'space-around'
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  titleText:{
    fontFamily:'DMSans-Medium',
    fontSize:20
  },
  descriptionText:{
    fontFamily:'DMSans-Regular',
    fontSize:10,
    paddingVertical:'3%',
    color:'#B7B6B6'
  },
  buttonStyle:{
    flexDirection:'row',
    alignItems:'center',
  }, 
  clickText:{
    fontFamily:'DMSans-Medium',
    fontSize:14,
    color:'#1A1818',
  },
});