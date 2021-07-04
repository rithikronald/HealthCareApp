import * as React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import colors from '../assets/colors/colors'
import Card from '../components/Card'
import data from '../assets/data/homeList'

export default function Home({ navigation }) {
  return (
    <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Hey 👋</Text>
       <FlatList 
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlistContainer} 
          renderItem={({item,index})=>(
            <Card title={item.title} description={item.description} image={item.image} color={item.color} onPress={()=>navigation.navigate('HeartRateMonitor')} />
          )} 
          keyExtractor={(item)=>item.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
    paddingHorizontal:'2%',
    paddingTop:'10%'
  },
  textStyle: {
    fontFamily:'DMSans-Bold',
    fontSize:24,
    paddingVertical:'4%',
    marginLeft:"5%"
    
  },
  cardContainer:{
    width:'100%',
    elevation:8,
    backgroundColor:colors.backgroundColor,
    padding:'3%',
    flexDirection:'row'
  },
  textContainer:{
    flex: 3,
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  titleText:{
    fontFamily:'DMSans-Medium',
    fontSize:20
  },
  descriptionText:{
    fontFamily:'DMSans-Regular',
    fontSize:10,
    paddingVertical:'3%'
  },
  buttonStyle:{

  }, 
  clickText:{
    fontFamily:'DMSans-Medium',
    fontSize:14
  },
  flatlistContainer:{
    backgroundColor: colors.backgroundColor,
    paddingHorizontal:'5%',
    paddingVertical:'6%'
  }
});