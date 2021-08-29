import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet } from "react-native";

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={styles.container}>
          <Text
            style={styles.textInput}>
            This is Second Page under Second Page Option
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
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey'
  }
});

export default SecondPage;
