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

import DropDownPicker from 'react-native-dropdown-picker';

const CardDetailsScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'New Card', value: 'new'}
    
  ]);
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
        <Text style={styles.title}>Card Details</Text>
        </View>
        <View style={styles.root}>
        
        <DropDownPicker
          style={{width:"110%",marginTop:"5%",marginRight:"1%",height:"5%",backgroundColor:"white"}}
          open={open}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems} 
          stickyHeader={true}
          autoScroll={true}
          Value={value}
          placeholder="Select Card"
          onChangeItem={items => setValue(items.value)}
          />
        </View>
        
        <Text style={styles.topup1}>CARD NUMBER</Text>
        <CustomInput
          name="Cnumber"
          placeholder="Card Number"
          control={control}
          //add rules
            rules={{
                required: "Card Number is required",
                pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                },
            }}
        />
         <Text style={styles.topup}>VALID THRU</Text>
        <CustomInput
          name="expdate"
          placeholder="Valid Thru"
          control={control}
          //add rules
            rules={{
                required: "Expire date is required",
            }}
        />
         <Text style={styles.topup}>CVC</Text>
        <CustomInput
          name="cvc"
          placeholder="CVC"
          control={control}
          //add rules
            rules={{
                required: "CVC is required",
                pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                },
            }}
        />
       <Text style={styles.info}> Three digits that on backside of the card</Text>
       <Text style={styles.amount}>You will be charged</Text>
        <CustomInput
          name="total"
          placeholder="Total Amount"
          control={control}
          //add rules
            rules={{
                required: "Card Number is required",
                pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                //disabled: true,
                defaultValue: "RS. ",
                },
            }}
        />
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
    marginBottom: "-1%" 
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
