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
  Button,
  Modal,
  Pressable,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import ticket from "../../../assets/images/ticket.png";
import { FormControl, Select, CheckIcon } from "native-base";

const options = [
  { label: "Ticket expirey", value: "Ticket expirey" },
  { label: "Entry without ticket", value: "Entry without ticket" },
];

const ReportUser = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "Ticket expirey", value: "ticket" },
  //   { label: "Entry without ticket", value: "entry" },
  // ]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSignInPressed = async (data) => {
  //     if (loading) {
  //       return;
  //     }

  //     setLoading(true);
  //     try {
  //       const response = await Auth.signIn(data.username, data.password);
  //       console.log(response);
  //     } catch (e) {
  //       Alert.alert("Oops", e.message);
  //     }
  //     setLoading(false);
  //   };

  //   const onForgotPasswordPressed = () => {
  //     navigation.navigate("ForgotPassword");
  //   };

  //   const onSignUpPress = () => {
  //     navigation.navigate("SignUp");
  //   };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View
          style={{ backgroundColor: "white", width: "120%", marginTop: "-6%" }}
        >
          <Text style={styles.title}>Report</Text>
        </View>

        <Text style={styles.topup}>Name :</Text>
        <Text style={styles.box}>W.H.Dilsha Thathsarani</Text>

        <Text style={styles.topup}>Route :</Text>
        <Text style={styles.box}>Colombo to Gampaha</Text>

        <Text style={styles.topup}>Date :</Text>
        <Text style={styles.box}>02-02-2022</Text>

        <Text style={styles.topup}>Cost :</Text>
        <Text style={styles.box}>LKR </Text>

        <Text style={styles.topup}>Type of fine :</Text>
        <View style={styles.container}>
          <Select
            accessibilityLabel="Select Fine Type"
            placeholder="Select Fine Type"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            borderColor="white"
            mt="2"
            style={styles.input}
            // onValueChange={(itemValue) => setRole(itemValue)}
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

        {/* pop-up model */}

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
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Reason for fine {"->"} </Text>
          </Pressable>
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
  container: {
    backgroundColor: "white",
    width: 350,
    height: 55,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,

    marginTop: 5,
    marginBottom: -15,
    marginRight: "auto",
  },
  input: {
    paddingVertical: 10,
    fontSize: 20,
    border: "none",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "8%",
    marginTop: "10%",
  },
  box: {
    backgroundColor: "#BDB6B6",
    width: "100%",
    height: "8%",
    marginTop: "1%",
    marginBottom: "4%",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },
  topup: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "3%",
    marginBottom: "-1%",
  },

  info: {
    fontWeight: "regular",
    fontSize: 16,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "6%",
    marginTop: "0%",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "6%",
  },
  //dropdown
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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

export default ReportUser;
