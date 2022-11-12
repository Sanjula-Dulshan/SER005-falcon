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
import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import constants from "../../constants/constants";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = (data) => {
    axios.post(constants.backend_url + "/user/login", data).then((res) => {
      if (res.data.msg === "Incorrect password") {
        Alert.alert("Error", "Incorrect username or password");
      } else if (res.data.msg === "Email not verified") {
        Alert.alert("Activation Failed", "Please activate your email", [
          {
            text: "OK",
            onPress: () => navigation.navigate("ConfirmEmail"),
          },
        ]);
      } else {
        //if a admin logs in, navigate to admin screen
        if (res.data.user.role === "Admin") {
          navigation.navigate("HomeAdmin");
        }
        //if a user logs in, navigate to user screen
        else {
          //navigation.navigate("User");
          navigation.navigate("HomeTicket");
        }
      }
    });
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
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="FORGOT"
        />
        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={handleSubmit(onSignInPressed)}
        />
        <View style={{ marginLeft: "10%" }}>
          <View style={styles.section}>
            <Text style={styles.text}>Don't have an account?</Text>
            <CustomButton
              text="Create one"
              onPress={onSignUpPress}
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
  logo: {
    width: "70%",
    marginBottom: "20%",
    marginTop: "20%",
    maxWidth: 300,
    maxHeight: 200,
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
