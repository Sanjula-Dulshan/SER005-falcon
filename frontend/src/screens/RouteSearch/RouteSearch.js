import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { Component, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const RouteSearch = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [date, setDate] = useState(new Date().toLocaleDateString());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setDate(new Date(date).toLocaleDateString());
    hideDatePicker();
  };
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [datePickerVisible, setDatePickerVisible] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisible(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisible(false);
  // };

  // const handleConfirm = (date) => {
  //   setSelectedDate(date);
  //   hideDatePicker();
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 25,
              marginRight: 10,
            }}
          >
            Route
          </Text>
        </View>
        <CustomInput
          name="start location"
          placeholder="Start Location"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="end location"
          placeholder="End Location"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomButton
          title="Select Date"
          loading={loading}
          text={date}
          bgColor={"white"}
          fgColor={"black"}
          onPress={showDatePicker}
          type="datepicker"
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <CustomButton
          text="SEARCH ROUTE"
          // onPress={handleSubmit(onSignInPressed)}
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
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  dateContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A8E9CA",
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: "left",
    width: 230,
    fontSize: 16,
    color: "#000",
  },
});

export default RouteSearch;
