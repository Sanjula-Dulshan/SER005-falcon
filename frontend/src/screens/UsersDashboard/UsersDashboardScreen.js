import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomCard from "../../components/CustomCard";

const UsersDashboardScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomCard />

        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </View>
    </ScrollView>
  );
};

export default UsersDashboardScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E4E4E4",
    height: "100%",
  },
});
