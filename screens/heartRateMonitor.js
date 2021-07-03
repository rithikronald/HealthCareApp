import React,{useState} from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,Modal} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'


export default function HeartRateMonitor({ navigation }) {
  const [modalVisible,setModalVisible] = useState(true);
  return (
    <View style={styles.containerStyle}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
      >
      <View style={styles.modalContainerStyle}> 
        <Icon name="closecircleo" size={25} style={{alignSelf:'flex-end',margin:10}} onPress={()=>setModalVisible(false)} />
        <Text style={{fontSize:18,fontFamily:'DMSans-Medium',}}>How to measure your heart beat?</Text>
        <Text style={{fontSize:16,fontFamily:'DMSans-Regular',color:colors.textColorMedium,width:'70%',marginVertical:"4%"}}>Place your finger on the camer & tap to start</Text>
        <Image source={require('../assets/images/scan.png')} style={{width:300,height:300,alignSelf:"center"}} />
      </View>
      </Modal>
      <>
      <Text style={styles.lightText}>Measuring</Text>
      <Text style={styles.titleText}>Heart Beat</Text>
      <Image source={require('../assets/images/red-heart.png')} style={{width:225,height:250}} />
      <View style={{flexDirection:'row',alignItems:'center',}}>
        <Image source={require('../assets/images/oximeter.png')} style={{width:50,height:50}} />
        <Text style={{fontSize:50,fontFamily:'DMSans-Medium',marginLeft:'3%'}}>80</Text>
        <Text style={{fontSize:16,fontFamily:'DMSans-Medium',alignSelf:'flex-end',paddingBottom:"2%",padding:'1%'}}>BPM</Text>
      </View>
      <Text style={styles.lightText}>Please wait for the heart rate to measure</Text>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
    alignItems:'center',
    justifyContent:'space-around',
    height:'70%'
    
  },
  titleText: {
    fontFamily:'DMSans-Bold',
    fontSize:40,
    padding:'4%',
  },
  lightText:{
    fontFamily:'DMSans-Medium',
    color:colors.textColorMedium,
    fontSize:16,width:'60%',
    textAlign:'center'
  },
  modalContainerStyle:{
    width:'100%',
    height:'60%',
    backgroundColor:colors.backgroundColor,
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    elevation:10,
    padding:"4%",
  }
});