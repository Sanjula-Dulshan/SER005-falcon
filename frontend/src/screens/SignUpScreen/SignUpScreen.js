import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomDropDown from "../../components/CustomDropDown";
import constants from "../../constants/constants";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const options = [
  { label: "Passenger", value: "Passenger" },
  { label: "Ticket Examiner", value: "Ticket Examiner" },
];

const CONTACT_NUMBER_REGEX = /^[0-9]{10}$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    console.log("Data: ", data);
    const { username, password, email, name, mobile, role } = data;

    try {
      axios
        .post(constants.backend_url + "/user/register", data)
        .then((res) => {
          console.log("Response: ", res);
          if (res.data.success) {
            Alert.alert("Success", "User registered successfully", [
              {
                text: "OK",
                onPress: () => navigation.navigate("ConfirmEmail"),
              },
            ]);
          } else {
            Alert.alert("Error", res.data.message);
          }
        })
        .catch((err) => {
          console.log("Error: ");
        });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />

        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="mobile"
          control={control}
          placeholder="Contact Number"
          rules={{
            required: "Contact Number is required",

            pattern: {
              value: CONTACT_NUMBER_REGEX,
              message: "Mobile Number is invalid",
            },
          }}
        />

        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
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
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
        <CustomDropDown
          aLabel="Select Account Type"
          placeholder="Select Account Type"
          options={options}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <View style={{ marginLeft: "10%" }}>
          <View style={styles.section}>
            <Text style={styles.text}>Have an account?</Text>
            <CustomButton
              text="Sign in"
              onPress={onSignInPress}
              type="TERTIARY"
            />
          </View>
        </View>
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
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
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
