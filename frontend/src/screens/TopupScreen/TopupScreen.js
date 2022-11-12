import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Constants from "../../constants/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopupScreen = () => {
  //load wallet amount
  let user_id;
  useEffect(() => {
    const loadWallet = async () => {
    user_id="u002";
      try {
        const res = await axios.get(`${Constants.backend_url}/wallet/details/${user_id}`);
        setAmount(res.data[0].amount);
        setLoanAmount(res.data[0].loan_amount);
        const res2 = await axios.get(`${Constants.backend_url}/card/getMycard/${user_id}`);
        setcard_count(res2.data.length);
        console.log(card_count);
      } catch (error) {
        console.log(error);
      }
    };
    loadWallet();
  }, []);

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const details= async () => {
    navigation.navigate("ViewCardScreen");
  }

  const proceed = (data) => {
     const data1=data.amount;
     AsyncStorage.setItem("topup", data1);
     AsyncStorage.setItem("amount", amount.toString());  
     AsyncStorage.setItem("loan_amount", loan_amount.toString());
     navigation.navigate("CardDetailsScreen");
  };

  const[amount,setAmount]=useState(0);
  const[loan_amount,setLoanAmount]=useState(0);
  const[card_count,setcard_count]=useState(0);


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <View style={{backgroundColor:"white",width:"120%",marginTop:"-6%"}}>
        <Text style={styles.title}>Top Up Your Wallet</Text>
        </View>
        <Text style={styles.subtitle1}>Wallet Balance</Text>
        <Text style={styles.subtitle2}>Loan Balance</Text>
        <Text style={styles.amount1}>{amount} Points</Text>
        <Text style={styles.amount2}>{loan_amount} Points</Text>
        <Text style={styles.topup}>Top up amount</Text>
        <CustomInput
          name="amount"
          id='amount'
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
          onPress={handleSubmit(proceed)}
          type="PROCEED"
        />
         <Text style={styles.savecard}>{card_count} Saved card(s)</Text>
        <CustomButton
              text="View Details"
              onPress={details}
              type="VIEWCARD"
            />
        <View style = {styles.lineStyle} />
        <CustomButton
          text={loading ? "Loading..." : "Transaction History"}
          onPress={() => navigation.navigate("ReportDownloadScreen")}
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
