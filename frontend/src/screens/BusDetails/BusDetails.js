import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
  DatePickerAndroid,
} from "react-native";
import calender from "../../../assets/images/Calendar.png";
import man from "../../../assets/images/man.png";
import wifi from "../../../assets/images/Services.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import StepIndicator from 'react-native-step-indicator';
import BusCard from "../../components/BusCard/busCard";

// const [date, setDate] = useState(0)
// const [open, setOpen] = useState(false)

const labels = ["Trip Details","Seat","Bus List","Bus Details","Booked"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#EEB815',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#EEB815',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#EEB815',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#EEB815',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#EEB815',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#EEB815',
  stepIndicatorLabelFinishedColor: '#EEB815',
  stepIndicatorLabelUnFinishedColor: 'white',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#EEB815'
};


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





const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onConfirm = () => {
    navigation.navigate("Confirmation");
  }




  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  const buttonTextStyle = {
    color: "#EEB815"
};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

<View style={{flex: 1, marginTop: 10}} >

        <StepIndicator
         customStyles={customStyles}
         currentPosition={2}
         labels={labels}
    />
    </View>

    <Text style={styles.text}>Main Informaion </Text>

      <View style={{marginTop:-20, marginLeft:10, display:"flex"}}>

      <View style={{flexDirection:'row'}}>
        <Image
            source={calender}
            style={[styles.png1, ]}
            resizeMode="contain"
          />
        <Text style={styles.subText}>{ Date().substring(0,21)} </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
            source={man}
            style={[styles.png1, ]}
            resizeMode="contain"
          />
        <Text style={styles.subText}> SLTB Bus </Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
            source={calender}
            style={[styles.png1, ]}
            resizeMode="contain"
          />
        <Text style={styles.subText}>+9411 245 2344 </Text>
      </View>


      </View>

      <Text style={styles.text}>Schedule </Text>

    

      <View style={{marginLeft:20,marginTop:10, zIndex:4, paddingBottom:30}}>
       <Text style={styles.textTime}>6.30</Text>
      </View> 

      <View style={{marginLeft:20,marginTop:30, zIndex:4, paddingBottom:35}}>
       <Text style={styles.textTime}>7.30</Text>
      </View> 

      <View style={{marginLeft:60,marginTop:-160, height:150}}>
        <StepIndicator
          stepCount={2}
          customStyles={thirdIndicatorStyles}
          currentPosition={2}
          direction='vertical'
          labels={["Akuressa", 'Kataragama']}
          
        />
      </View>

      <Text style={{marginLeft:20, fontSize:16}}>Travel Time : 1 Hour</Text>

      <View style={{height:280}}>
        <Text style={styles.text}>Services </Text>
        <Image source={wifi} style={{marginLeft:20, marginTop:10}}/>
      </View>

      <View style={{height:100}}>
        <Text style={styles.textPrice}>Total :  </Text>
        <Text style={styles.textPriceSub}>(in points) </Text>
        <Text style={styles.textPriceLabel}>125 </Text>
        <Text style={styles.textTc}>for 2  </Text>
        <Image
            source={man}
            style={[styles.png2, ]}
            resizeMode="contain"
          />
      </View>

      <CustomButton
          text={loading ? "Loading..." : "Confirm"}
          onPress={onConfirm}
        />

        <View style={{height:100}}></View>


       
     

      
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    marginBottom: "20%",
    marginTop: "20%",
    maxWidth: 300,
    maxHeight: 200,
  },

  stepIndicator: {
    marginTop: -30,
    height: 750,
  
  },

  textTime: {
    fontSize: 16,
    fontWeight: "bold",

  },

  png2: {
    width: "100%",
    marginTop: -35,
    maxWidth: 700,
    maxHeight: 700,
    marginLeft: 100,
    paddingBottom: 20,
    transform: [{ scale: 1.2 }],
    //zIndex:1,
  },

  png1: {
    width: "100%",
    marginBottom: "0%",
    marginTop: 10,
    maxWidth: 700,
    maxHeight: 700,
    marginHorizontal: -160,
    transform: [{ scale: 1.2 }],
    //zIndex:1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    spaceBetween: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 20,
    paddingBottom: 10,
  },

  textTc: {
    fontWeight: "normal",
    fontSize: 18,
    marginTop: -30,
    marginLeft: 240,
    paddingBottom: 10,
    zIndex: 1,
  },

  textPrice: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 15,
    marginLeft: 50,
  },

  textPriceLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: -65,
    marginLeft: 130,
    backgroundColor: "#BBBBBB",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
    paddingTop:5,
    paddingBottom:5,
    width: 100,
  },



  textPriceSub: {
    fontWeight: "normal",
    fontSize: 13,
    marginTop: 0,
    marginLeft: 50,
    paddingBottom: 10,
    zIndex: 4,
    color: "#999999"
  },


  subText: {
    position: "relative",
    fontWeight: "normal",
    fontSize: 16,
    marginVertical: 5,

  },

  countText: {
    fontWeight: "bold",
    fontSize: 16,
    maxWidth: 300,
    marginVertical: 200
  },

  midText: {
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: "33%",
    marginRight: "auto",
    marginTop : -25,
  },

  AvailableText: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: "30%",
    marginRight: "auto",
    alignSelf: "center",
    marginHorizontal: "30%",
    
  },

  SeatCountText: {
    fontWeight: "bold",
    fontSize: 70,
    marginVertical: -120,
    marginRight: "auto",
    alignSelf: "center",
    marginHorizontal: "35%",
    color: "green",
  },

});

export default SignInScreen;
