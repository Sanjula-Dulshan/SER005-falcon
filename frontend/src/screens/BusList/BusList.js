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
import Logo from "../../../assets/images/count_circle.png";
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


 





const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();



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
    <ScrollView showsVerticalScrollIndicator={true}>

    <View style={{flex: 1, marginTop: 10}} >

        <StepIndicator
         customStyles={customStyles}
         currentPosition={2}
         labels={labels}
    />
    </View>

    <Text style={styles.text}>Select available bus </Text>

      <View style={{marginTop:-30}}>

        {/* pass start point to buscard as param a*/}

        <BusCard start="Akuressa" />

        <BusCard />

        <BusCard />

      </View>

      
      
      
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

  homelogo: {
    width: "100%",
    marginBottom: "0%",
    marginTop: -180,
    maxWidth: 700,
    maxHeight: 700,
    //scale image
    transform: [{ scale: 1.5 }],
    zIndex:-1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    spaceBetween: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 15,
    marginLeft: 20,
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
