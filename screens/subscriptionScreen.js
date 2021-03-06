import  React,{useState} from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,Dimensions,SafeAreaView,Modal} from 'react-native';
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'



export default function SubscriptionScreen({ navigation }) {
    const [modalVisible,setModalVisible] = useState(true);
  return (
    <View style={styles.containerStyle}>
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
        >
        <View style={{backgroundColor:'#00000080',flex:1,justifyContent:'flex-end'}}>
            <View style={styles.modalContainerStyle}>
                <Text style={{textAlign:'center',fontSize:16,margin:'2%',width:'80%',alignSelf:'center',marginTop:'3%',fontFamily:'DMSans-Medium'}}>Are you sure you want to miss out of this offer?</Text>
                <View style={styles.textContainer}>
                <Text style={[styles.headertextStyle,{fontSize:22}]}>Limited Offer Only!</Text>
                
                <View style={styles.pointsContainer}>
                    <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                    <Text style={styles.pointsTextStyle}>HD Videos with dynamic audio</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                    <Text style={styles.pointsTextStyle}>Workout routines for healthy living</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                    <Text style={styles.pointsTextStyle}>Cardio monitoring for optimizing exercise and track progress</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                    <Text style={styles.pointsTextStyle}>One on one consultation and advice from cardiologist</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('fillDetailsScreen')}>
                <Text style={styles.buttonTextStyle}>SUBSCRIBE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',margin:'3%'}} onPress={()=>setModalVisible(false)}>
                <Text style={{color:colors.textColorMedium,fontFamily:'DMSans-Medium',fontSize:16}}>No Thanks</Text>
            </TouchableOpacity>
            </View>
            </View>
        </Modal>
        <>
        <Image source={require('../assets/images/HeartPulse.png')} resizeMode="contain" style={styles.imageStyle} />
        <View style={styles.textContainer}>
            <Text style={styles.headertextStyle}>Premium Features</Text>
            <View style={styles.pointsContainer}>
                <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                <Text style={styles.pointsTextStyle}>HD Videos with dynamic audio</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                <Text style={styles.pointsTextStyle}>HD Videos with dynamic audio</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                <Text style={styles.pointsTextStyle}>Workout routines for healthy living</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                <Text style={styles.pointsTextStyle}>Cardio monitoring for optimizing exercise and track progress</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Icon name="checkcircleo" size={20} color={colors.button} style={{alignSelf:'center'}} />
                <Text style={styles.pointsTextStyle}>One on one consultation and advice from cardiologist</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('fillDetailsScreen')}>
            <Text style={styles.buttonTextStyle}>SUBSCRIBE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',margin:'2%'}} onPress={()=>navigation.navigate('subscriptionScreen')}>
            <Text style={{color:colors.textColorMedium,fontFamily:'DMSans-Medium',fontSize:16}}>No Thanks</Text>
        </TouchableOpacity>
        </>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor
  },
  textContainer:{
    margin:'4%',
  },
  imageStyle: {
    width:'100%',
    height:'30%'
  },
  headertextStyle: {
    fontFamily:'DMSans-Bold',
    fontSize:30,
    textAlign:'center',
    color:colors.button,
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
  pointsContainer:{
      marginTop:'10%',
      flexDirection:'row',
      width:'80%',
      marginLeft:'8%'
  },
  pointsTextStyle:{
    color:colors.button,
    fontSize:16,
    marginLeft:'3%',
  },
  modalContainerStyle:{
    width:'100%',
    height:'68%',
    backgroundColor:colors.backgroundColor,
    position:'absolute',
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    elevation:10,
    padding:10,
    paddingBottom:"10%"
  }
});