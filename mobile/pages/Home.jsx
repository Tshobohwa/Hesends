import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Home</Text>
      <Text>KES Account</Text>
      <Text style={{}}>14 500 KES</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
