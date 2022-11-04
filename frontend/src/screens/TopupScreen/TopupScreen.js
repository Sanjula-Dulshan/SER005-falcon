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

const TopupScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <View style={{backgroundColor:"white",width:"120%",marginTop:"-6%"}}>
        <Text style={styles.title}>Top Up Your Wallet</Text>
        </View>
        <Text style={styles.subtitle1}>Wallet Balance</Text>
        <Text style={styles.subtitle2}>Loan Balance</Text>
        <Text style={styles.amount1}>00.00 Points</Text>
        <Text style={styles.amount2}>80.00 Points</Text>
        <Text style={styles.topup}>Top up amount</Text>
        <CustomInput
          name="amount"
          placeholder="Amount"
          control={control}
          //add rules
            rules={{
                required: "Amount is required",
                pattern: {
                value: /[0-9]/,
                message: "Amount must be a number",
                },
            }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Proceed"}
          //onPress={handleSubmit(onSignInPressed)}
          type="PROCEED"
        />
         <Text style={styles.savecard}>1 Saved card(s)</Text>
        <CustomButton
              text="View Details"
             // onPress={viewCard}
              type="VIEWCARD"
            />
        <View style = {styles.lineStyle} />
        <CustomButton
          text={loading ? "Loading..." : "Transaction History"}
          //onPress={handleSubmit(onSignInPressed)}
          type="HISTORY"
        />

        <CustomButton
          text={loading ? "Loading..." : "Request a loan ?"}
          //onPress={handleSubmit(onSignInPressed)}
          type="LOAN"
        />
        <Text>{'\n'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E4E4E4"
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
    fontSize: 26,
    marginVertical: 5,
    marginRight: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "20%",
    marginTop: "14%",
    
  },
  subtitle1: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "6%",
    },
  subtitle2: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "57%",
    marginTop: "-10%",
    color:"red"
  },
  amount1: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "1%",
    marginTop: "1%",
  },
  amount2: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "58%",
    marginTop: "-9%",
    color: "red",
  },
  topup: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "8%",   
  },
  savecard: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "1%",
    marginTop: "8%",   
  },
  lineStyle:{
    borderWidth: 1.8,
    borderColor:'black',
    margin:10,
    width: "112%",
}
});

export default TopupScreen;
