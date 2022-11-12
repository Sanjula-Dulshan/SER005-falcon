import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,

} from "react-native";
import Logo from "../../../assets/images/sucess.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

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


 
const Topupsuccess = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const buttonTextStyle = {
    color: "#EEB815"
};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.homelogo, ]}
          resizeMode="contain"
        />
        <View>
        <Text style={styles.AvailableText}>Your Wallet Top-up 
        Successfull</Text>
          
      </View> 

        
        <CustomButton
          text={loading ? "Loading..." : "Go Back"}
          onPress={() => navigation.navigate("TopupScreen")}
          type = {"gogo"}
        />
        
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

    marginTop: 150,
    maxWidth: 300,
    maxHeight: 300,
    //scale image
    transform: [{ scale: 1.0 }],
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
    marginVertical: 5,
    marginRight: "auto",
  },

  countText: {
    fontWeight: "bold",
    fontSize: 16,
    maxWidth: 300,
    marginVertical: 200
  },

  midText: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop : 10,
    alignSelf: "center",
  },

  AvailableText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",   
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

export default Topupsuccess;
