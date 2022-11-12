import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import CustomDropDown from "../../components/CustomDropDown";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import Constants from "../../constants/constants";
import { Button } from "native-base";


const CardDetailsScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const options = [
    { label: "4XXX XXXX XXXX 5666", value: "saved_1" },
    { label: "New Card", value: "new_card" },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cardNumber1, setCardNumber] = useState("");
  const[cvc1,setCvc]=useState("");
  const[expiry1,setExpiry]=useState("");
   let cardNumber;
   let cvc;
   let expiry;
  let user_id;
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getcard = async () => {
      user_id="u002";
      try{
      const res= await axios.get(`${Constants.backend_url}/card/getMycard/${user_id}` );
      cardNumber=res.data[0].lastFourDigits;
      setCardNumber(cardNumber);
      console.log(cardNumber1);
      cvc=res.data[0].cardSecurityCode;
      setCvc(cvc);
      console.log(cvc1);
      expiry=res.data[0].ExDate;
      setExpiry(expiry);
      console.log(expiry1);

    } catch (error) {
      console.log(error);
    }

      };
    getcard();
  }, );

  // console.log(cardNumber);
  // console.log(cvc);
  // console.log(expiry);

  const topupwallet = async (data) => {
    console.log(data);
    navigation.navigate("TopupScreen");
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
       console.log('A1',amount);
       console.log('L1',loan_amount);
    }else{
      amount=amount1+loan2;
      loan_amount=0.00;
      await axios.patch(`${Constants.backend_url}/wallet/update/${user_id}`, {
        user_id: user_id,
        amount: amount,
        loan_amount: loan_amount,
        });
      console.log('A2',amount);
      console.log('L2',loan_amount);
    }
  };

   

  let newamount='';
  let newloan_amount='';
  let new_topup='';
  const[new_amount,setAmount]=useState('');
  const[new_loan_amount,setLoanAmount]=useState('');
  const[topup,setTopupAmount]=useState('');
  
  const amount1=async()=>{
    newamount=await AsyncStorage.getItem("amount");
    setAmount(newamount);
    newloan_amount=await AsyncStorage.getItem("loan_amount");
    setLoanAmount(newloan_amount);
    new_topup=await AsyncStorage.getItem("topup");
    setTopupAmount(new_topup);
  
  }
  amount1();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <View style={{backgroundColor:"white",width:"120%",marginTop:"-6%"}}>
        <Text style={styles.title}>Card Details</Text> 
        </View>

        <View style={styles.root}>
        <Text style={styles.topup1}>Select Card</Text>
        <CustomDropDown
          aLabel="Select card"
          placeholder="4XXX XXXX XXXX 5666"
          options={options}
        /> 
        </View>
        
        <Text style={styles.topup2}>CARD NUMBER</Text>
        <TextInput
         style={styles.amount4}
          name="Card_number"
          placeholder="Card Number"
          control={control}
          value={cardNumber1}
          //add rules
            rules={{
                required: "Card Number is required",
                pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                disabled: true,
                },
            }}
        />
         <Text style={styles.topup}>VALID THRU</Text>
        <TextInput
         style={styles.amount4}
          name="card_expiry"
          placeholder="Valid Thru"
          control={control}
          value={expiry1}
          //add rules
            rules={{
                required: "Expire date is required",
                disabled: true,
            }}
        />
         <Text style={styles.topup}>CVC</Text>
        <TextInput
          style={styles.amount4}
          name="card_cvv"
          placeholder={cvc1}
          placeholderColor={"darkgray"}
          control={control}
          value={cvc1}
          //add rules
            rules={{
                required: "CVC is required",
                pattern: {
                value: [0-9],
                message: "Should Include Only Numbers",
                disabled: true,
                },
            }}
        />
       {/* <Text style={styles.info}> Three digits that on backside of the card</Text> */}
       <Text style={styles.amount}>You will be charged</Text>
        <TextInput
          style={styles.amount2}
          name="total"
          placeholder={topup}
          value={`Rs.${topup}`}
          control={control}
          //add rules
            rules={{
                pattern: {
                value: /[0-9]/,
                message: "Should Include Only Numbers",
                disabled: true,              
                },
            }}
        />
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
    padding: 23,
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
  topup2: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "0%",
    marginTop: "-5%",
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
    amount2: {
      fontWeight: "bold",
      fontSize: 20,
      marginVertical: 5,
      marginRight: "auto",
      marginLeft: "0%",
      marginTop: "0%",
      marginBottom: "0%",
      backgroundColor: "white",
      width: "100%",
      height: "8%",
      borderRadius: 10,
      paddingLeft: "5%",
      paddingTop: "3%",
      paddingBottom: "3%",
      paddingRight: "5%",
      color: "black",
      borderColor: "white",
      borderWidth: 1,
    },
    amount4: {
      fontWeight: "bold",
      fontSize: 20,
      marginVertical: 5,
      marginRight: "auto",
      marginLeft: "0%",
      marginTop: "3%",
      marginBottom: "0%",
      backgroundColor: "white",
      width: "100%",
      height: "8%",
      borderRadius: 10,
      paddingLeft: "5%",
      paddingTop: "3%",
      paddingBottom: "3%",
      paddingRight: "5%",
      color: "black",
      borderColor: "white",
      borderWidth: 1,
    },
});

export default CardDetailsScreen;
