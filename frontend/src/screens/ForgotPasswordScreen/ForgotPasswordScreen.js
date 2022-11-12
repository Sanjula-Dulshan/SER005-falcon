import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import constants from "../../constants/constants";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      axios
        .post(constants.backend_url + "/user/resetOtp", data)
        .then((res) => {
          if (res.data.msg === "Password reset OTP sent!") {
            Alert.alert("Success", "Password reset OTP sent!");
            navigation.navigate("NewPassword", {
              username: data.username,
            });
          }
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
          }}
        />
        <View style={{ marginTop: "10%", width: "100%" }}>
          <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
        </View>
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="FOURTH"
          s
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
  title: {
    marginVertical: "15%",
    fontSize: 35,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ForgotPasswordScreen;
