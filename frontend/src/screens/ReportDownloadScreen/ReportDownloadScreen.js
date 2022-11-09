import React, { useState, useCallback }  from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Modal
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import{Row,Table, TableWrapper} from 'react-native-table-component';
import { useForm, Controller } from "react-hook-form";
import { FlatList } from "react-native-gesture-handler";
import { Button, Searchbar } from 'react-native-paper';
import moment from 'moment';
import MonthPicker from 'react-native-month-picker';

const ReportDownloadScreen = ({ placeholder }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const headers=['Date','Type','Amount'];
    const rows1=[['1/1/2022'],['Deduct'],['100.00']];
    const rows2= [['8/10/2022'],['Topup'],['500.00']];
    
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [isOpen, toggleOpen] = useState(false);
    const [value, onChange] = useState(null);
  

return (
    
      <View>
      <View style={{backgroundColor:"white",width:"120%",marginTop:"-6%"}}>
        <Text style={styles.title}>Transaction History</Text>
        </View>
        <Image source = {require('../../../assets/images/report.png')} 
        style={{width: 120, height: 120,marginTop:"2%",marginLeft:"35%"}}/>

       <Text style={styles.filter}>Filter by month</Text>
      <View style={{width:"27%", marginLeft:"3%",height:"10%"}}>
      
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.input}>
        <Text style={styles.inputText}>
          {value ? moment(value).format('MM/YYYY') : 'Month'}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="fade"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <MonthPicker
              selectedDate={value || new Date()}
              onMonthChange={onChange}
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => toggleOpen(false)}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
     <Searchbar
      placeholder="Search by date"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{width:"58%",marginLeft:"40%",marginTop:"-15%",borderRadius:12
      }}
      />
        
        <Table 
         borderStyle={{borderWidth: 1}} style={{marginLeft:'10%',marginTop:'10%',
         marginBottom:'3%'
         }}>
            <Row data={headers} 
            style={{backgroundColor:'lightgray'}} height={40} 
            textStyle={{textAlign:'center',fontWeight:'bold',fontSize:18}}
            widthArr={[110,110,110]}
            />
           <TableWrapper>
            <Row data={rows1}  height={40} style={{backgroundColor:'white'}}
            textStyle={{textAlign:'center',fontSize:17,fontWeight:'450'}} widthArr={[110,110,110]}
             />  
             <Row data={rows2} height={40} style={{backgroundColor:'white'}}
            textStyle={{textAlign:'center',fontSize:17,fontWeight:'450'}} widthArr={[110,110,110]}
             /> 

            <Row data={rows2} height={40} style={{backgroundColor:'white'}}
            textStyle={{textAlign:'center',fontSize:17,fontWeight:'450'}} widthArr={[110,110,110]}
             />

           <Row data={rows1} height={40} style={{backgroundColor:'white'}}
            textStyle={{textAlign:'center',fontSize:17,fontWeight:'450'}} widthArr={[110,110,110]}
             />
             </TableWrapper>
         </Table>
      
        <CustomButton
          text={loading ? "Loading..." : "Download"}
          //onPress={handleSubmit(onSignInPressed)}
          type="WALLET"
        />
       
      </View>

  );
};

const styles = StyleSheet.create({
  container: {},

  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 70,
  },

  confirmButton: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: 'lightgray',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 33,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    borderColor:"black"
  },

  filter: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '3%',
  },

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
    marginLeft: "19%",
    marginTop: "20%",
    
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

export default ReportDownloadScreen;

