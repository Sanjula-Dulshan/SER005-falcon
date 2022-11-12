import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import axios from "axios";
import constants from "../../constants/constants";

const NewPasswordScreen = () => {
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const navigation = useNavigation();
  const pwd = watch("password");

  const onSubmitPressed = async (data) => {
    try {
      axios
        .put(constants.backend_url + "/user/resetPassword", data)
        .then((res) => {
          if (res.data.msg === "Incorrect OTP") {
            Alert.alert("Error", "Incorrect OTP");
          } else {
            Alert.alert("Success", "Password was changed", [
              {
                text: "OK",
                onPress: () => navigation.navigate("SignIn"),
              },
            ]);
          }
        });
    } catch (e) {
      console.log("Error", e);
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
          placeholder="Username"
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: "Code is required" }}
        />

        <CustomInput
          placeholder="New password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Confirm Password"
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
        <View style={{ marginTop: "10%", width: "100%" }}>
          <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
        </View>
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

export default NewPasswordScreen;
