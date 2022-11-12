import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Constants from "../../constants/constants";

const ViewCardScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <View style={{backgroundColor:"white",width:"120%",marginTop:"-6%"}}>
        <Text style={styles.title}>View Card Details</Text>
        </View>

        <Image source = {require('../../../assets/images/card.jpg')} 
        style={{width: 220, height: 120,marginTop:"4%",marginLeft:"3%"}}/>
        <Text style={styles.subtitle1}>Dulanjana-Card 1</Text>
        <Text style={styles.amount1}>{cardNumber1}</Text>
        <Text style={styles.amount1}>{expiry1}</Text>
   
        <CustomButton
          text={loading ? "Loading..." : "Remove Card"}
          type="REMOVECARD"
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

export default ViewCardScreen;
