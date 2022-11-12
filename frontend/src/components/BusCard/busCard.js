import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import StepIndicator from 'react-native-step-indicator';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import constants from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";


export default function BusCard({ bus,startP,endP, seat }) {
  const navigation = useNavigation();
  const [businfo, setBusinfo] = useState({});
  const [fee, setFee] = useState(20);
  const [start, setStart] = useState("");
  const[end,setEnd]=useState("");
  const startAt = "";
  const endAt = "";
  const route = useRoute();
  let price = 23;

  console.log("start from param ; ",route.params.startP);
  console.log("seat from param ; ",seat);


  startP = route.params.startP;
  endP = route.params.endP;

  
  const calculateFee =  async (businfo) => {
    //get start and end point
    let length = 0;


    console.log("\n\nlenghth\n\n",businfo?.busStops.length);
  
      //get index of start and end point
      for (let i = 0; i < businfo?.busStops.length; i++) {
        console.log("start",businfo?.busStops[i].stop," :> " ,startP);
        console.log("end",businfo?.busStops[i].stop," :> " ,endP);
        if (businfo?.busStops[i].stop == startP) {
          var startIndex = i;
        }
        if (businfo?.busStops[i].stop  == endP) {
          console.log("end",businfo?.busStops[i].stop," :> " ,end);
          var endIndex = i;
        }
      }
      //calculate fee
      const fee = (endIndex - startIndex) * 10;
      setFee(fee);
    
  }


  //get route details using bus id
  const getRouteDetails = async (bus) => {
    console.log("Bus",bus.routeID);
    try {
      const response = await axios.get(
        constants.backend_url + "/route/getFirstAndLastBusStop/" + bus.routeID).then(async (res) => {
          console.log("in async 2",res.data);
          setBusinfo(res.data);
          await calculateFee(businfo);
        })
        .catch((err) => {
          console.log("Error: ", JSON.stringify(err));
        });
    } catch (err) {
      console.log("Errort: ", JSON.stringify(err));
    }
  };

  useEffect(() => {
    getRouteDetails(bus);
    
  }, []);

  

  const onBusSelect = () => {
    //create a log 
    console.log("Bus Selected");
    navigation.navigate("BusDetails", { bus: bus._id, fee: fee, start: startP, end: endP, routeID: bus.routeID, seat:seat });
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>

      <View style={{marginLeft:20,marginTop:50, zIndex:2, paddingBottom:35}}>
       <Text style={styles.textTime}>{businfo?.startTime}</Text>
      </View> 

      <View style={{marginLeft:20,marginTop:40, zIndex:0, paddingBottom:35}}>
       <Text style={styles.textTime}>{businfo.endTime}</Text>
      </View> 

      


      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={2}
          customStyles={thirdIndicatorStyles}
          currentPosition={2}
          direction='vertical'
          labels={[businfo.startPoint, businfo.endPoint]}
        />
      </View>

      <View style={{marginLeft:120,marginTop:20, zIndex:2, paddingBottom:35}}>
       <Text style={styles.textStation}>Bus Station</Text>
      </View> 

      <View style={{marginLeft:120,marginTop:40, zIndex:2, paddingBottom:35}}>
       <Text style={styles.textStation}>Bus Station</Text>
      </View> 
      

       <View style={{marginLeft:270,marginTop:10,position:'absolute'}}>
       <Text style={styles.textTravel}>Travel</Text>
      </View> 
      
        <Image
          style={styles.image}
          source={require("../../../assets/images/clock1.png")}
        />


      <View style={{marginLeft:270,marginTop:140, zIndex:2, paddingBottom:35}}>
       <Text style={styles.textDuration}>{businfo.duration}.00</Text>
      </View> 

      
      <View style={{zIndex:4}}>
        <CustomButton 
          title="plusCount"
          text = "Take it"
          bgColor="#EEB815"
          fgColor={"white"}
          type={"takeIt"}
          onPress={() => onBusSelect()}
        />
      </View>
      <View style={{marginLeft:20,marginTop:-32, zIndex:3, paddingBottom:35}}>
       <Text style={styles.textPrice}>{fee}💰</Text>
      </View> 

      </View>
    </View>
  );
}


const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'white',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'black',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: 'black',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: 'white',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: 'black',
  labelSize: 18,
  fontWeight:50,
  currentStepLabelColor: 'black',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  stepIndicator: {
    marginVertical: -130,
    marginHorizontal: 80,
    height: 150,
  
  },

  
  card: {
    width: "92%",
    marginVertical: 50,
    marginBottom: 1,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    zIndex: 1,
    marginHorizontal: "75%",
    marginVertical: -120,
    
  },
  text: {
    position: "relative",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },

  textTravel: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,

  },

  textStation: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "normal",
    color: "#4F4F4F",
    marginTop: 10,

  },

  textDuration: {
    position: "absolute",
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
  },

  textPrice: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    borderRadius: 10,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
    // borderColor: "#EEB815",
    // borderWidth: 1,
  },


  textTime: {
    position: "absolute",
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
    marginBottom: 10,
  },
});