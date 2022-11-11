import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function CustomCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Name:</Text>
            <Text style={styles.text}>Sanjula Dulshan</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Email:</Text>
            <Text style={styles.text}>sdulshan10@gmail.com</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Role:</Text>
            <Text style={styles.text}>Passenger</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>Contact:</Text>
            <Text style={styles.text}>0719647830</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Approve"
            text="Approve"
            bgColor="#EEB815"
            fgColor={"white"}
            type={"approve"}
          />
          <CustomButton
            title="Decline"
            text="Decline"
            bgColor="#ffffff"
            fgColor="#F40000"
            type={"decline"}
          />
          <CustomButton
            title="View"
            text="View"
            bgColor="#ffffff"
            fgColor="#EEB815"
            type={"view"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 100,
  },

  card: {
    width: 350,
    marginVertical: 20,
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

  textWrap: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",

    marginHorizontal: "2%",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
});
