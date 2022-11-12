import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import CustomButton from "../../components/CustomButton/CustomButton";
import banUser from "../../../assets/images/ban.png";
import { FormControl, Select, CheckIcon } from "native-base";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import constants from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";

const options = [
  { label: "Yes,Ban this user", value: "Yes,Ban this user" },
  { label: "Entry without ticket", value: "Entry without ticket" },
];

export default function CustomCard() {
  const [passengerList, setPassengerList] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const onReportPress = (data) => {
    navigation.navigate("ReportUser", {
      name: data.user,
      startRoute: data.startPoint,
      endRoute: data.endPoint,
      cost: data.fee,
    });
  };

  useEffect(() => {
    try {
      axios.get(constants.backend_url + "/ticket/").then((res) => {
        setPassengerList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [passengerList]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onViewPress = (data) => {
    setPassengerDetails(data);
    setModalVisible(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ width: "120%", marginTop: "-6%" }}>
          <Text style={styles.title}>Passenger List</Text>
        </View>
        <View>
          {passengerList.map((item, index) => {
            return (
              <View style={styles.card} key={index}>
                <View style={styles.textWrap}>
                  <View style={styles.textContainer}>
                    <View style={{ marginStart: "-12%", marginTop: "3%" }}>
                      <Avatar
                        rounded
                        source={{
                          uri: "https://randomuser.me/api/portraits/men/36.jpg",
                        }}
                      />
                    </View>
                    <Text style={styles.text}>{item.user}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>
                      {item.startPoint} to {item.endPoint}
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton
                    title="Report"
                    text="Report"
                    fgColor="black"
                    type={"report"}
                    onPress={handleSubmit(() => onReportPress(item))}
                  />

                  <CustomButton
                    title="View"
                    text="View"
                    fgColor="black"
                    type={"viewReport"}
                    onPress={handleSubmit(() => onViewPress(item))}
                  />
                </View>
              </View>
            );
          })}
        </View>

        {/* pop up modal */}
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <Modal
              style={styles.modal}
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ marginTop: -30 }}>
                    <Text style={styles.title}>Details</Text>
                    <View
                      style={{
                        borderBottomColor: "black",
                        borderBottomWidth: 3,
                      }}
                    />
                  </View>

                  <Text style={styles.topup}>
                    Name : {passengerDetails.user}{" "}
                  </Text>

                  <Text style={styles.topup}>
                    Route : {passengerDetails.startPoint} to{" "}
                    {passengerDetails.endPoint}
                  </Text>

                  <Text style={styles.topup}>
                    Cost : {passengerDetails.fee}
                  </Text>

                  <Pressable
                    style={[styles.fineButton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Report</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 10,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropContainer: {
    backgroundColor: "white",
    width: 250,
    height: 55,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,

    marginTop: 10,
    marginBottom: -15,
    marginRight: "auto",
  },
  input: {
    paddingVertical: 10,
    fontSize: 20,
    border: "none",
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    zIndex: 1,
    marginHorizontal: "75%",
    marginVertical: -120,
  },
  textWrap: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: "10%",
    marginHorizontal: "2%",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "12%",
    marginTop: "10%",
  },

  textTravel: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,
  },

  textStation: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,
  },

  textDuration: {
    position: "absolute",
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
  },

  textPrice: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    // borderColor: "#EEB815",
    // borderWidth: 1,
  },

  textTime: {
    position: "absolute",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
    marginBottom: 10,
  },
  avatar: {
    marginTop: "5%",
    marginLeft: "5%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000aa",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "auto",
    width: "80%",
  },
  modalContainer: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    backgroundColor: "red",
  },
  modal: {
    background: "red",
    position: "absolute",
    top: "50px",
    right: "calc(50% - 200px)",
    border: "1px solid #ccc",
    padding: "16px",
    minHeight: "300px",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  topup: {
    fontWeight: "bold",
    fontSize: 22,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "10%",
    marginBottom: "-1%",
  },
  fineButton: {
    padding: 5,
    borderRadius: 10,
    width: "60%",
    marginTop: "5%",
  },

  buttonClose: {
    backgroundColor: "#F40000",
    elevation: 2,
    marginTop: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
