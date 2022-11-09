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
    borderColor: "#FBBC05",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  text_SECONDARY: {
    color: "#FBBC05",
  },

  text_TERTIARY: {
    color: "#FBBC05",
    marginLeft: "35%",
  },
  text_FOURTH: {
    color: "#FBBC05",
  },
  text_FORGOT: {
    alignSelf: "flex-end",
    color: "#000000",
  },
  text_PROCEED: {
    alignSelf: "flex-end",
    backgroundColor: "#FBBC05",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 22,
    textAlign: "center",
    width: "50%",
    height: 34,
    borderRadius: 10,
    marginRight: "52%",
  },
  text_VIEWCARD: {
    color: "#2DAB22",
    marginRight: "60%",
    fontSize: 21,
    marginTop: "-5%",
    marginLeft: "-10%",
    fontStyle:"underline",
    textDecorationLine: "underline"  
  },
  text_HISTORY: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 20,
    paddingLeft: "4%",
    paddingTop: "2%",
    width: "75%",
    height: 44,
    borderRadius: 8,
    marginRight: "27%",
    marginTop: "3%",
  },
  text_LOAN: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 22,
    textAlign: "center",
    width: "60%",
    height: 44,
    borderRadius: 8,
    marginRight: "42%",
    paddingTop: "1%",
    marginTop: "6%",
  },
  text_WALLET: {
    alignSelf: "flex-end",
    backgroundColor: "#FBBC05",
    color: "white",
    fontFamily: "Roboto",
    fontSize: 22,
    textAlign: "center",
    width: "70%",
    height: 50,
    borderRadius: 6,
    alignContent: "center",
    marginRight: "18%",
    borderColor: "black",
    borderTopWidth: 1.5,
    borderWidth: 1.5,
    borderStyle: "solid",
    paddingTop: "2%",
  },
  text_REMOVECARD: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    color: "red",
    borderColor: "red",
    borderWidth:1.3,
    fontFamily: "Roboto",
    fontSize: 18,
    textAlign: "center",
    width: "38%",
    height: 38,
    paddingTop: "2%",
    borderRadius: 8,
    marginRight: "65%",
    marginTop: "-4%",
  },
});

export default CustomButton;
