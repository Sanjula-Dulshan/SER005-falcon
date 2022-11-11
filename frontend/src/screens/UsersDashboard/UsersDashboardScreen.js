import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";
import constants from "../../constants/constants";

const UsersDashboardScreen = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    axios.get(constants.backend_url + "/user/new").then((res) => {
      setNewUsers(res.data);
    });
  }, []);

  const onApprovePressed = (data) => {
    console.log("data: ", data);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {newUsers.map((user, index) => {
          return (
            <View style={styles.container} key={index}>
              <View style={styles.card}>
                <View style={styles.textWrap}>
                  <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Name:</Text>
                    <Text style={styles.text}>user.name</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Email:</Text>
                    <Text style={styles.text}>user.email</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Role:</Text>
                    <Text style={styles.text}>user.role</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Contact:</Text>
                    <Text style={styles.text}>user.mobile</Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    title="Approve"
                    text="Approve"
                    bgColor="#EEB815"
                    fgColor={"white"}
                    type={"approve"}
                    onPress={handleSubmit(onApprovePressed(user))}
                  />
                  <CustomButton
                    title="Decline"
                    text="Decline"
                    bgColor="#ffffff"
                    fgColor="#F40000"
                    type={"decline"}
                  />
                  <CustomButton
                    title="View"
                    text="View"
                    bgColor="#ffffff"
                    fgColor="#EEB815"
                    type={"view"}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#E4E4E4",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 100,
  },

  card: {
    width: 350,
    marginVertical: 20,
    marginBottom: 1,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
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

  textWrap: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",

    marginHorizontal: "2%",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
});
export default UsersDashboardScreen;
