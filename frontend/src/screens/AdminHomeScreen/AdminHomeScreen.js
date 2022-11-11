import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import bg from "../../../assets/images/bg_blur.png";
import bonusManage from "../../../assets/images/manage_bonus.png";
import userManage from "../../../assets/images/manage_user.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";

const AdminHomeScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUserPressed = () => {
    navigation.navigate("New Users");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.root}>
      <Image
        source={bg}
        style={[styles.bgImg, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <View style={styles.container}>
        {/* <Text
          style={styles.header}
          onPress={() => navigation.navigate("AddEvent")}
        >
          {" "}
          City Creator{" "}
        </Text> */}
        <Pressable style={styles.card} onPress={onUserPressed}>
          <View>
            <View style={styles.cardContainer}>
              <Image
                source={bonusManage}
                style={[styles.img, { height: height * 0.1 }]}
                resizeMode="contain"
              />
              <Text style={styles.cardText}>Manage Bonus</Text>
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.card} onPress={onUserPressed}>
          <View>
            <View style={styles.cardContainer}>
              <Image
                source={userManage}
                style={[styles.img, { height: height * 0.1 }]}
                resizeMode="contain"
              />
              <Text style={styles.cardText}>Manage User</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EEB815",
    height: "100%",
  },
  bgImg: {
    width: "100%",
    position: "absolute",
    bottom: "10%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 300,
    marginBottom: 20,
    marginLeft: "4%",
    marginRight: "4%",
    height: "15%",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  img: {
    width: "30%",
    height: "30%",
    marginLeft: "-30%",
  },
});

export default AdminHomeScreen;
