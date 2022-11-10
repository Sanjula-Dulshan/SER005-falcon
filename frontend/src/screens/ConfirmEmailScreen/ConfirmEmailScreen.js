import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import constants from "../../constants/constants";

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const navigation = useNavigation();

  const onConfirmPressed = async (data) => {
    try {
      //await Auth.confirmSignUp(data.username, data.code);
      axios.put(constants.backend_url + "/user/verify", data).then((res) => {
        if (res.data.msg === "Incorrect OTP") {
          Alert.alert("Error", "Incorrect OTP");
        } else {
          Alert.alert("Success", "Email verified successfully", [
            {
              text: "OK",
              onPress: () => navigation.navigate("SignIn"),
            },
          ]);
        }
      });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = async () => {
    try {
      //await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was resent to your email");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username code is required",
          }}
        />

        <CustomInput
          name="otp"
          control={control}
          placeholder="OTP Code"
          rules={{
            required: "OTP code is required",
          }}
        />
        <View style={{ marginTop: "10%", width: "100%" }}>
          <CustomButton
            text="Confirm"
            onPress={handleSubmit(onConfirmPressed)}
          />
        </View>
        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="FOURTH"
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
    fontSize: 36,
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

export default ConfirmEmailScreen;
