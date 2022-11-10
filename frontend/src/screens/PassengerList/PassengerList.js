import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function CustomCard() {
  return (
    <View style={styles.container}>
      <View style={{ width: "120%", marginTop: "-6%" }}>
        <Text style={styles.title}>Passenger List</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <View style={{ marginStart: "-12%", marginTop: "3%" }}>
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
            </View>
            <Text style={styles.text}>Sanjula Dulshan</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>sdulshan10@gmail.com</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Report"
            text="Report"
            fgColor="black"
            type={"report"}
          />

          <CustomButton
            title="View"
            text="View"
            fgColor="black"
            type={"viewReport"}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <View style={{ marginStart: "-12%", marginTop: "3%" }}>
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
            </View>
            <Text style={styles.text}>Sanjula Dulshan</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>sdulshan10@gmail.com</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Report"
            text="Report"
            fgColor="black"
            type={"report"}
          />

          <CustomButton
            title="View"
            text="View"
            fgColor="black"
            type={"viewReport"}
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.textWrap}>
          <View style={styles.textContainer}>
            <View style={{ marginStart: "-12%", marginTop: "3%" }}>
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
            </View>
            <Text style={styles.text}>Sanjula Dulshan</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>sdulshan10@gmail.com</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Report"
            text="Report"
            fgColor="black"
            type={"report"}
          />

          <CustomButton
            title="View"
            text="View"
            fgColor="black"
            type={"viewReport"}
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
    borderRadius: 10,
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
  textWrap: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",
    marginLeft: "10%",
    marginHorizontal: "2%",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: "12%",
    marginTop: "10%",
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
    // borderColor: "#EEB815",
    // borderWidth: 1,
  },

  textTime: {
    position: "absolute",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "green",
    marginLeft: 10,
    marginBottom: 10,
  },
  avatar: {
    marginTop: "5%",
    marginLeft: "5%",
  },
});
