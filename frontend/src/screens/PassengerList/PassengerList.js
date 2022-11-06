import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

const Task = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 25,
            marginRight: 10,
            marginTop: 40,
          }}
        >
          Passengers List
        </Text>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>Dilsha Thathsarani</Text>

            <View style={styles.fixToText}>
              <Button
                style={styles.button}
                title="Report user"
                color={"#F40000"}
                onPress={() => Alert.alert("Left button pressed")}
              />
              <Button
                style={styles.button}
                title="View user"
                color={"#EEB815"}
                onPress={() => Alert.alert("Right button pressed")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginTop: 35,
  },
  button1: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    marginRight: 10,
  },
});

export default Task;
