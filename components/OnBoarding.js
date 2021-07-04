import * as React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,Animated,Dimensions} from 'react-native';
import colors from '../assets/colors/colors'
import data from '../assets/data/onBoarding'
import Icon from 'react-native-vector-icons/AntDesign'


export default function OnBoarding(props,{ navigation }) {
  const scrollX = new Animated.Value(0)
  function renderContent(){
    const windowWidth = Dimensions.get('window').width;
    return(
      <Animated.ScrollView 
            horizontal 
            pagingEnabled
            scrollEnabled
            snapToAlignment='center'
            decelerationRate={0}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {nativeEvent : {contentOffset:{x: scrollX}}}
            ],{useNativeDriver:false})}
      >
      {data.map((item,index)=>(
        <View
          key={index}
          style={{width:windowWidth}}
        >
          <View style={styles.imageContainer}>
          {index == 2?
            <View style={styles.closeButton}>
              <Icon name="closecircleo" size={35} onPress={props.onPress} />
            </View>:null
          }
            <Image source={item.image} resizeMode="cover" style={styles.imageStyle} />
          </View>
          <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{item.description}</Text>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
    )
  }

  function renderDots(){
    const windowWidth = Dimensions.get('window').width;
    const dotPosition = Animated.divide(scrollX,windowWidth)

    return(
      <View style={styles.dotsContainer}>
        {
          data.map((item,index)=>{
            const opacity = dotPosition.interpolate({
              inputRange:[index-1,index,index+1],
              outputRange:[0.3,1,0.3],
              extrapolate:'clamp'
            })

            const dotSize = dotPosition.interpolate({
              inputRange:[index-1,index,index+1],
              outputRange:[6,16,6],
              extrapolate:'clamp'
            })
            return(
              <Animated.View
                  key={index}
                  opacity={opacity}
                  style={[styles.dotsStyle,{width:dotSize,height:dotSize}]}>
              </Animated.View>
            )
          })
        }
      </View>
    )
  }

  return (
        <>
          {renderContent()}
          <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:'DMSans-Medium',fontSize:13}}>Swipe to learn more</Text>
          </View> 
          {renderDots()}
          
        </>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    flex: 1,
    alignItems:'center',
    backgroundColor:colors.backgroundColor,
    marginTop:'10%'
  },
  imageStyle: {
    width:'100%',
    height:"70%",
    marginTop:'10%'
  },
  textContainer:{
    backgroundColor:colors.backgroundColor,
    bottom:'10%'
  },
  textStyle: {
    fontFamily:'DMSans-Regular',
    fontSize:18,
    padding:'4%',
    textAlign:'center',
  },
  dotsContainer:{
    flexDirection:'row',
    padding:'2%',
    bottom:'15%',
  },
  dotsStyle:{
    borderRadius:10,
    backgroundColor:colors.button,
    marginHorizontal:'2%'
  },
  closeButton:{
    alignSelf:'flex-end',
    position:"absolute",
    marginHorizontal:'4%'
  }
});