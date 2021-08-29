import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

const MyHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Welcome Mario!</Text>
      <View style={styles.inputView}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Student')}>
          <Text style={styles.loginText}>BECOME A STUDENT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputView}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sports')}>
          <Text style={styles.loginText}>BECOME A TEACHER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MyHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDDCDA",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'rgba(0, 0, 0, 0.75)',
    marginBottom: 20,
    textShadowColor: "#fb5b5a",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  inputView: {
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  btn: {
    width: 220,
    backgroundColor: "#DDDCDA",
    borderRadius: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    borderWidth:  3,
    borderColor: "#fb5b5a",
  },
  image: {
    width: 390,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    flexDirection: "column",
    shadowColor: "black",
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  loginText: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold"
  },
});
