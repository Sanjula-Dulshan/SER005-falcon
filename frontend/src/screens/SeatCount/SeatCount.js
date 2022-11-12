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
  DatePickerAndroid,
} from "react-native";
import Logo from "../../../assets/images/count_circle.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import StepIndicator from 'react-native-step-indicator';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

// const [date, setDate] = useState(0)
// const [open, setOpen] = useState(false)

const labels = ["Trip Details","Seat","Bus List","Bus Details","Booked"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#EEB815',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#EEB815',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#EEB815',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#EEB815',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#EEB815',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#EEB815',
  stepIndicatorLabelFinishedColor: '#EEB815',
  stepIndicatorLabelUnFinishedColor: 'white',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#EEB815'
};




 //get start point and end point from params
// const {startP,endP} = route.params;




const SeatCount = ({startP,endP}) => {
  
  const route = useRoute();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);


  console.log("Seat", route.params);

  const AVAILABLE_SEATS = 52;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSeatCount = () => {
    AsyncStorage.setItem("seatCount", count.toString());
    navigation.navigate("BusList", {startP: route.params.startP,endP:route.params.endP, seats: count});
  };

  const IncreamentSeat = () => {
    if(count < AVAILABLE_SEATS ){
      setCount(count + 1)
    }
  }

  const DecreamentSeat = () => {
    if(count >= 2){
      setCount(count - 1)
    }

  }


  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

<View style={{flex: 1, marginTop: 10}} >

        <StepIndicator
         customStyles={customStyles}
         currentPosition={1}
         labels={labels}
    />
    </View>

      <View>
          {/* add a text in middle of the screen  */}
        <Text style={styles.text}>Pick your seat count</Text>
        <Text style={styles.AvailableText}>Available Seat : {AVAILABLE_SEATS - count}</Text>
        

      </View> 
      <View>
      <Text style={styles.SeatCountText}>{count<10?"0":""}{count}</Text>
      </View>

      <View>
          {/* add a text in middle of the screen  */}
        <Text style={styles.midText}>Seats Selected</Text>       

      </View> 

      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.homelogo, ]}
          resizeMode="contain"
        />
        

        
        <CustomInput
          name="startPoint"
          placeholder={count.toString()}
          control={control}
          value="dsf"
          rules={{ required: "Start Point is required" }}
          style={styles.countText}
          type={"count"}
          onTextChange={(text) => setCount(text)}
        />



        {/* add a clickable date picker witch label*/}

        
        <CustomButton 
          title="minuCount"
          loading={loading}
          text = "-"
          bgColor={"black"}
          fgColor={"white"}
          type={"minus"}
          onPress={DecreamentSeat}
        />

        <CustomButton 
          title="plusCount"
          loading={loading}
          text = "+"
          bgColor={"black"}
          fgColor={"white"}
          type={"plus"}
          onPress={IncreamentSeat}
        />





        <CustomButton
          text={loading ? "Loading..." : "Check Buses"}
          onPress={onSeatCount}
          type = {"seat"}
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
  logo: {
    width: "70%",
    marginBottom: "20%",
    marginTop: "20%",
    maxWidth: 300,
    maxHeight: 200,
  },

  homelogo: {
    width: "100%",
    marginBottom: "0%",
    marginTop: -180,
    maxWidth: 700,
    maxHeight: 700,
    //scale image
    transform: [{ scale: 1.5 }],
    zIndex:-1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    spaceBetween: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
    marginRight: "auto",
    paddingLeft: 20,
  },

  countText: {
    fontWeight: "bold",
    fontSize: 16,
    maxWidth: 300,
    marginVertical: 200
  },

  midText: {
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: "33%",
    marginRight: "auto",
    marginTop : -25,
  },

  AvailableText: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: "30%",
    marginRight: "auto",
    alignSelf: "center",
    marginHorizontal: "30%",
    
  },

  SeatCountText: {
    fontWeight: "bold",
    fontSize: 70,
    marginVertical: -120,
    marginRight: "auto",
    alignSelf: "center",
    marginHorizontal: "35%",
    color: "green",
  },

});

export default SeatCount;
