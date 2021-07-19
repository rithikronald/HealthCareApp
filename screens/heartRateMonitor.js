import React,{useState,useEffect} from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,Modal,ImageBackground} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'


export default function HeartRateMonitor({ navigation }) {
  const [modalVisible,setModalVisible] = useState(true);
  const [percentage,setPercentage] = useState(80);
  
  return (
    <View style={styles.containerStyle}>
      <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}

      >
      <View style={{backgroundColor:'#00000080',flex:1,justifyContent:'flex-end'}}>
      <View style={styles.modalContainerStyle}> 
        <Icon name="closecircle" color="#E4E4E4" size={30} style={{alignSelf:'flex-end',margin:10}} onPress={()=>setModalVisible(false)} />
        <Text style={{fontSize:18,fontFamily:'DMSans-Medium',}}>How to measure your heart beat?</Text>
        <Text style={{fontSize:16,fontFamily:'DMSans-Regular',color:colors.textColorMedium,width:'70%',marginVertical:"4%"}}>Place your finger on the camer & tap to start</Text>
        <Image source={require('../assets/images/scan.png')} style={{width:300,height:300,alignSelf:"center"}} />
      </View>
      </View> 
      </Modal>
      <>
      <Text style={styles.lightText}>Measuring</Text>
      <Text style={styles.titleText}>Heart Beat</Text>
      <Image source={require('../assets/images/animatedHeart.gif')} resizeMode="contain" style={{width:200,height:225}} />
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Image source={require('../assets/images/oximeter.png')} style={{width:50,height:50}} />
        <Text style={{fontSize:50,fontFamily:'DMSans-Medium',marginLeft:'3%'}}>80</Text>
        <Text style={{fontSize:16,fontFamily:'DMSans-Medium',alignSelf:'flex-end',paddingBottom:"2%",padding:'1%'}}>BPM</Text>
      </View>
      <Text style={styles.lightText}>Please wait for the heart rate to measure</Text>
      <View style={styles.percentageContainer}>
        <View style={[styles.percentageValue,{width: `${percentage}%`}]}/> 
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
    alignItems:'center',
    paddingTop:'15%'
  },
  titleText: {
    fontFamily:'DMSans-Bold',
    fontSize:40,
    padding:'4%',
  },
  lightText:{
    fontFamily:'DMSans-Medium',
    color:"#BCB7B7",
    fontSize:16,width:'60%',
    textAlign:'center',
    marginTop:'6%'
  },
  modalContainerStyle:{
    width:'100%',
    height:'60%',
    backgroundColor:colors.backgroundColor,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    elevation:10,
    padding:"4%",
  },
  percentageContainer:{
    width:200,
    height: 50,
    marginVertical: "5%",
    borderRadius: 70,
    backgroundColor:"#E7E7E7",
    justifyContent:'center'
  },
  percentageValue:{
    height: 50,
    backgroundColor: "#E14343",
    borderTopStartRadius:70,
    borderBottomStartRadius:70,
    alignItems:'center',
    justifyContent:'center'
  },
  percentageText:{
    fontSize:20,
    position:'absolute',
    alignSelf:"center",
    color:'#fff'
  }
});