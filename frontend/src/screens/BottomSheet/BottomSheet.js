import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useForm, Controller } from "react-hook-form";
import ticket from "../../../assets/images/ticket.png";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.centeredView}>
      <Modal
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
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>SEND FINE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    width: "60%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#FBBC05",
    elevation: 2,
    marginTop: "5%",
  },
  textStyle: {
    color: "white",
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
});

export default App;
