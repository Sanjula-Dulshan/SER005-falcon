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
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import DropDownPicker from "react-native-dropdown-picker";

const CardDetailsScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
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
        <CustomButton
          text="Reason for fine            ->"
          //   onPress={onForgotPasswordPressed}
          type="FINE"
        />
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
});

export default CardDetailsScreen;
