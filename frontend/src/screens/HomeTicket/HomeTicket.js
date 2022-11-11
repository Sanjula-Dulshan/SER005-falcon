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








const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [open, setOpen] = useState(false)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setDate(new Date(date).toISOString())
   // hideDatePicker();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onStartTrip = () => {
    navigation.navigate("SeatCount");
  };


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
        />

        <CustomInput
          name="endPoint"
          placeholder="Trip Destination"
          secureTextEntry
          control={control}
          rules={{
            required: "End Point is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
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
          onPress={onStartTrip}

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
