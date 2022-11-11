import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Avatar, Accessory, Button } from "react-native-elements";
import CustomButton from "../../components/CustomButton/CustomButton";
import ticket from "../../../assets/images/ticket.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useForm, Controller } from "react-hook-form";

export default function ReportUserList() {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ width: "120%", marginTop: "-4%" }}>
          <Text style={styles.title}>Passenger List</Text>
        </View>
        <CustomButton
          text="Report User List"
          type="DownloadReport"

          // onPress={handleSubmit(onSignInPressed)}
        />
        <View style={styles.card}>
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
              <Text style={styles.text}>Sanjula Dulshan</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>sdulshan10@gmail.com</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Ban"
              text="Ban"
              fgColor="black"
              type={"report"}
              onPress={() => setModalVisible(true)}
            />

            <CustomButton
              title="View"
              text="View"
              fgColor="black"
              type={"viewReport"}
            />
          </View>
        </View>

        <View style={styles.card}>
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
              <Text style={styles.text}>Sanjula Dulshan</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>sdulshan10@gmail.com</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Ban"
              text="Ban"
              fgColor="black"
              type={"report"}
              onPress={() => setModalVisible(true)}
            />

            <CustomButton
              title="View"
              text="View"
              fgColor="black"
              type={"viewReport"}
            />
          </View>
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
                  <View>
                    <Image source={ticket} style={{}} />
                  </View>
                  <Text style={styles.topup}>Reason for fine :</Text>
                  <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                  />
                  <Text style={styles.topup}>Price for fine :</Text>
                  <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                  />
                  <Pressable
                    style={[styles.fineButton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>SEND FINE</Text>
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
  button: {
    padding: 5,
    marginLeft: "-50%",
    width: "60%",
  },
  fineButton: {
    padding: 5,
    borderRadius: 10,
    width: "60%",
    marginTop: "5%",
  },

  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  buttonClose: {
    backgroundColor: "#FBBC05",
    elevation: 2,
    marginTop: "5%",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
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
    marginTop: "3%",
    marginBottom: "-1%",
  },
  //set blur background when pop-up model is open
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
});
