import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text
            style={styles.textInputFavouriteList}>
            Welcome Mario
          </Text>
          <Text
            style={styles.textInputFavouriteList}>
            You have not yet selected your favourite sports!
          </Text>
        </View>
        <Text style={styles.footer}>
          www.sportrend.it
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInputFavouriteList: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
});

export default Dashboard;
