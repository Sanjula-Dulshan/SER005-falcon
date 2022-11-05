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

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

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

        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              padding: 20,
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}
            >
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "No date selected"}
            </Text>
            <CustomButton
              title="Select a date"
              onPress={showDatePicker}
              type="DATE"
            />
            <DateTimePickerModal
              date={selectedDate}
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </SafeAreaView>
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
});

export default RouteSearch;
