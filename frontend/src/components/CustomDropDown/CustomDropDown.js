//implement the dropdown component
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
} from "native-base";

const CustomDropDown = () => {
  const [service, setService] = useState("");
  return (
    <View>
      <FormControl isRequired isInvalid>
        <View style={styles.container}>
          <Select
            accessibilityLabel="Select Account Type"
            placeholder="Select Account Type"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
            borderColor="white"
            mt="2"
            style={styles.input}
          >
            <Select.Item label="Passenger" value="Passenger" />
            <Select.Item label="Ticket Examiner" value="Ticket Examiner" />
          </Select>
        </View>
        {/* {FormControl.ErrorMessage && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please make a selection!
          </FormControl.ErrorMessage>
        )} */}
      </FormControl>
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 350,
    height: 55,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 10,

    marginTop: 5,
    marginBottom: 25,
    marginRight: "auto",
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    border: "none",
    marginBottom: 0,
  },
});
