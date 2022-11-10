import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 10,
  },

  container_PRIMARY: {
    backgroundColor: "#FBBC05",
    elevation: 7,
  },

  container_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  container_DATE: {
    backgroundColor: "#3B71F3",
    elevation: 7,
  },
  container_decline: {
    elevation: 7,
    width: 100,
    height: 40,
    marginHorizontal: "7%",
    paddingTop: 8,
    paddingBottom: 3,
    borderColor: "#F40000",
    borderWidth: 2,
  },
  container_view: {
    elevation: 7,
    width: 100,
    height: 40,
    marginHorizontal: "7%",
    paddingTop: 8,
    paddingBottom: 3,
    borderColor: "#EEB815",
    borderWidth: 2,
  },
  container_report: {
    elevation: 7,
    width: 100,
    height: 40,
    marginHorizontal: "7%",
    paddingTop: 8,
    paddingBottom: 3,
    borderColor: "#F40000",
    backgroundColor: "#F40000",
    borderWidth: 2,
    marginLeft: "100%",
  },
  container_viewReport: {
    elevation: 7,
    width: 100,
    height: 40,
    marginHorizontal: "7%",
    paddingTop: 8,
    paddingBottom: 3,
    borderColor: "#EEB815",
    backgroundColor: "#EEB815",
    borderWidth: 2,
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  text_SECONDARY: {
    color: "#3B71F3",
  },

  text_TERTIARY: {
    color: "#FBBC05",
    marginLeft: "35%",
  },
  text_FORGOT: {
    alignSelf: "flex-end",
    color: "#000000",
  },
  text_FINE: {
    alignSelf: "flex-start",
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: "-3%",
  },
});

export default CustomButton;
