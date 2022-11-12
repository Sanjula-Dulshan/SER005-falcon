import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import axios from "axios";
import Constants from "../../constants/constants";

const NewCardScreen = () => {
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

  const topupwallet = async (data) => {
    console.log(data);

    const topup1= parseFloat(topup);
    const amount1= parseFloat(new_amount);
    const loan1= parseFloat(new_loan_amount);
    const loan2= topup1-loan1;
    let amount=0.00;
    let loan_amount=0.00;
    let user_id='u002';
    if(loan2<0){
       amount=amount1;
       loan_amount=loan2 * (-1);
       await axios.patch(`${Constants.backend_url}/wallet/update/${user_id}`, {
        user_id: user_id,
        amount: amount,
        loan_amount: loan_amount,
        });
    }else{
      amount=amount1+loan2;
      loan_amount=0.00;
      await axios.patch(`${Constants.backend_url}/wallet/update/${user_id}`, {
        user_id: user_id,
        amount: amount,
        loan_amount: loan_amount,
        });
    }
    navigation.navigate("Topupsuccess");
  };

  let newamount='';
  let newloan_amount='';
  let new_topup='';
  const[new_amount,setAmount]=useState('');
  const[new_loan_amount,setLoanAmount]=useState('');
  const[topup,setTopupAmount]=useState('');
  const USE_LIGHT_CREDIT_CARD_INPUT = false;

  
  const amount1=async()=>{
    newamount=await AsyncStorage.getItem("amount");
    setAmount(newamount);
    newloan_amount=await AsyncStorage.getItem("loan_amount");
    setLoanAmount(newloan_amount);
    new_topup=await AsyncStorage.getItem("topup");
    setTopupAmount(new_topup);
  
  }
  amount1();
  console.log(new_amount);
  console.log(new_loan_amount);
  console.log(topup);

  //   _onchange => form => {
  //   console.log(JSON.stringify(form, null, " "));
  // };

  // _onFocus => field => console.log("focusing", field);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View
          style={{ backgroundColor: "white", width: "120%", marginTop: "-6%" }}
        >
       <Text style={styles.title}>Card Details</Text>
        </View>
        <View style={styles.card}>
        {USE_LIGHT_CREDIT_CARD_INPUT ? 
        (<LiteCreditCardInput
           _onchange={console.log("change")}
          // _onFocus={_onFocus}
          autoFocus={console.log("focus")}
        />):(<CreditCardInput
          // _onchange={_onchange}
          // _onFocus={_onFocus}
        />)
        }
        <Text style={styles.info}> Three digits that on backside of the card</Text>
        </View>
      <View style={styles.value}>
          <Text style={styles.amount}>You will be charged</Text>
        <TextInput
          style={styles.amount3}
          name="total"
          placeholder={topup}
          value={`Rs.${topup}`}
          control={control}
           
        />
       
        </View>

        <CustomButton
          text={loading ? "Loading..." : "Top-up Wallet Now"}
          onPress={handleSubmit(topupwallet)}
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
  amount3: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "0%",
    marginBottom: "0%",
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    borderRadius: 10,
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    paddingRight: "5%",
    color: "black",
    borderColor: "white",
    borderWidth: 1,
  },
  card: {
    padding: 20,
    height: 495,
  },
  value: {
    width: "90%",
    height: 70,
    marginBottom: "1%",
  },
});

export default NewCardScreen;
