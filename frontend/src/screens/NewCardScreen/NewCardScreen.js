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
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
//import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const NewCardScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: "New Card", value: "new" }]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const USE_LIGHT_CREDIT_CARD_INPUT = false;

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  _onchange = (formData) => {
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = (field) => console.log("focusing", field);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View
          style={{ backgroundColor: "white", width: "120%", marginTop: "-6%" }}
        >
          <Text style={styles.title}>Card Details</Text>
        </View>
        {/* <View style={styles.card}>
        {USE_LIGHT_CREDIT_CARD_INPUT ? 
        (<LiteCreditCardInput
          _onchange={_onchange}
          _onFocus={_onFocus}
        />):(<CreditCardInput
          _onchange={_onchange}
          _onFocus={_onFocus}
        />)
        }
        <Text style={styles.info}> Three digits that on backside of the card</Text>
        </View> */}
        <View style={styles.value}>
          <Text style={styles.amount}>You will be charged</Text>
          <CustomInput
            name="total"
            placeholder="Total Amount"
            control={control}
            //add rules
            rules={{
              pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                //disabled: true,
                defaultValue: "RS. ",
              },
            }}
          />
        </View>

        <CustomButton
          text={loading ? "Loading..." : "Top-up Wallet Now"}
          //onPress={handleSubmit(onSignInPressed)}
          type="WALLET"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "35%",
    marginTop: "10%",
  },
  topup: {
    fontWeight: "bold",
    fontSize: 20,
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
    fontSize: 17,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "-10%",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "-4%",
  },
  card: {
    padding: 20,
    height: 495,
  },
  value: {
    width: "90%",
    height: 60,
    marginBottom: "1%",
  },
});

export default NewCardScreen;
