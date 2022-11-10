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

import DropDownPicker from "react-native-dropdown-picker";

const CardDetailsScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Ticket expirey", value: "ticket" },
    { label: "Entry without ticket", value: "entry" },
  ]);
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
        <CustomInput name="name" control={control} />

        <Text style={styles.topup}>Route :</Text>
        <CustomInput name="route" control={control} />

        <Text style={styles.topup}>Date :</Text>
        <CustomInput name="date" control={control} />

        <Text style={styles.topup}>Cost :</Text>
        <CustomInput name="time" control={control} />
        <Text style={styles.topup}>Cost :</Text>
        <View style={styles.root}>
          <DropDownPicker
            style={{
              width: "110%",

              marginRight: "1%",
              height: "5%",
              backgroundColor: "white",
            }}
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            stickyHeader={true}
            autoScroll={true}
            Value={value}
            placeholder="Select Card"
            // onChangeItem={(items) => setValue(items.value)}
          />
        </View>

        {/* pop-up model */}
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
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "8%",
    marginTop: "10%",
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
  topup1: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "5%",
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
});

export default CardDetailsScreen;
