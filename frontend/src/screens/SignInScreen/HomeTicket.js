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
import Logo from "../../../assets/images/bus.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-native-date-picker';

// const [date, setDate] = useState(0)
// const [open, setOpen] = useState(false)





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
          text = {new Date().toLocaleDateString()}
          bgColor={"white"}
          fgColor={"black"}
        />





        <CustomButton
          text={loading ? "Loading..." : "Let's Go"}
          onPress={handleSubmit(onSignInPressed)}

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
    marginTop: "10%",
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
