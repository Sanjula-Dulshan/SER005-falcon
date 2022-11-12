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

} from "react-native";
import Logo from "../../../assets/images/bus.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-native-date-picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";








const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString())


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setDate(new Date(date).toLocaleDateString())
    hideDatePicker();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onStartTrip = (data) => {

    //get start point and end point from data
    const { startPoint, endPoint } = data;

    console.log("Start : " + startPoint + " End : " + endPoint + " Date : " + date)

    //set start point and end point to async storage
    AsyncStorage.setItem("startPoint", startPoint);
    AsyncStorage.setItem("endPoint", endPoint);
    AsyncStorage.setItem("date", date);

    //send start point and end point to next screen
    navigation.navigate("SeatCount", { startP:startPoint, endP:endPoint, date });

    //navigation.navigate("SeatCount");
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.homelogo, ]}
          resizeMode="contain"
        />
        

        <Text style={styles.homeText}>Where do you want to go?</Text>
        <CustomInput
          name="startPoint"
          placeholder="Trip Start"
          control={control}
          rules={{ required: "Start Point is required" }}
          style={{marginTop: "-200px"}}
          onChangeText={(text) => setStartPoint(text)}
        />

        <CustomInput
          name="endPoint"
          placeholder="Trip Destination"
          control={control}
          rules={{
            required: "End Point is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
          onChangeText={(text) => setEndPoint(text)}
        />



        {/* add a clickable date picker witch label*/}

        
        <CustomButton 
          title="Select Date"
          loading={loading}
          text = {date}
          bgColor={"white"}
          fgColor={"black"}
          onPress={showDatePicker}
          type="datepicker"
        />

        
        <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />





        <CustomButton
          text={loading ? "Loading..." : "Let's Go"}
          onPress={handleSubmit(onStartTrip)}

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
    marginBottom: "0%",
    marginTop: "2%",
    maxWidth: 500,
    maxHeight: 400,
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
});

export default SignInScreen;
