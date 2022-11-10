import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomDropDown from "../../components/CustomDropDown";
import constants from "../../constants/constants";
import { FormControl, Select, CheckIcon } from "native-base";

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
  const [role, setRole] = useState();

  const onRegisterPressed = async (data) => {
    //set role value to data
    data.role = role;
    console.log("Data: ", data);

    try {
      axios
        .post(constants.backend_url + "/user/register", data)
        .then((res) => {
          if (res.data.msg === "User already exists") {
            Alert.alert("Error", "User already exists");
          } else {
            Alert.alert("Success", "User registered successfully", [
              {
                text: "OK",
                onPress: () =>
                  navigation.navigate("ConfirmEmail", {
                    username: data.username,
                  }),
              },
            ]);
          }
        })
        .catch((err) => {
          console.log("Error: ", JSON.stringify(err));
        });
    } catch (err) {
      console.log("Errort: ", JSON.stringify(err));
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
        {/* <CustomDropDown
          aLabel="Select Account Type"
          placeholder="Select Account Type"
          options={options}
        /> */}

        <View style={styles.container}>
          <Select
            accessibilityLabel="Select Account Type"
            placeholder="Select Account Type"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            borderColor="white"
            mt="2"
            style={styles.input}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            {options.map((option, index) => {
              return (
                <Select.Item
                  key={index}
                  label={option.label}
                  value={option.value}
                />
              );
            })}
          </Select>
        </View>

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
  container: {
    backgroundColor: "white",
    width: 350,
    height: 55,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,

    marginTop: 5,
    marginBottom: 25,
    marginRight: "auto",
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    border: "none",
    marginBottom: 0,
  },
});

export default SignUpScreen;
