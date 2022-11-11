import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import StepIndicator from 'react-native-step-indicator';

export default function BusCard({ start }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>

      <View style={{marginLeft:20,marginTop:50, zIndex:4, paddingBottom:35}}>
       <Text style={styles.textTime}>6.30</Text>
      </View> 

      <View style={{marginLeft:20,marginTop:40, zIndex:4, paddingBottom:35}}>
       <Text style={styles.textTime}>6.30</Text>
      </View> 

      


      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={2}
          customStyles={thirdIndicatorStyles}
          currentPosition={2}
          direction='vertical'
          labels={[start, 'Kataragama']}
        />
      </View>

      <View style={{marginLeft:120,marginTop:20, zIndex:4, paddingBottom:35}}>
       <Text style={styles.textStation}>Bus Station</Text>
      </View> 

      <View style={{marginLeft:120,marginTop:40, zIndex:4, paddingBottom:35}}>
       <Text style={styles.textStation}>Bus Station</Text>
      </View> 
      

       <View style={{marginLeft:270,marginTop:10,position:'absolute'}}>
       <Text style={styles.textTravel}>Travel</Text>
      </View> 
      
        <Image
          style={styles.image}
          source={require("../../../assets/images/clock1.png")}
        />


      <View style={{marginLeft:270,marginTop:140, zIndex:3, paddingBottom:35}}>
       <Text style={styles.textDuration}>6.30</Text>
      </View> 

      

        <CustomButton 
          title="plusCount"
          text = "Take it"
          bgColor="#EEB815"
          fgColor={"white"}
          type={"takeIt"}
        />

      <View style={{marginLeft:20,marginTop:-32, zIndex:3, paddingBottom:35}}>
       <Text style={styles.textPrice}>45💰</Text>
      </View> 

      </View>
    </View>
  );
}


const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'white',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'black',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: 'black',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: 'white',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: 'black',
  labelSize: 18,
  fontWeight:50,
  currentStepLabelColor: 'black',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  stepIndicator: {
    marginVertical: -130,
    marginHorizontal: 80,
    height: 150,
  
  },

  
  card: {
    width: "92%",
    marginVertical: 50,
    marginBottom: 1,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    zIndex: 1,
    marginHorizontal: "75%",
    marginVertical: -120,
    
  },
  text: {
    position: "relative",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },

  textTravel: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,

  },

  textStation: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,

  },

  textDuration: {
    position: "absolute",
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
  },

  textPrice: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    // borderColor: "#EEB815",
    // borderWidth: 1,
  },


  textTime: {
    position: "absolute",
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
    marginBottom: 10,
  },
});