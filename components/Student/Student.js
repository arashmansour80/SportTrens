import * as React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

const Student = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.container}>
          <ModalDropdown
            defaultValue="Select a sport"
            style={styles.modal}
            dropdownStyle={styles.dropDownModal}
            textStyle={styles.textStyle}
            dropdownTextStyle={styles.textStyle}
            options={['Tennis', 'Padel', 'Football', 'Nuoto']}/>
          <ModalDropdown
            defaultValue="Select your level"
            style={styles.modal}
            dropdownStyle={styles.dropDownModal}
            textStyle={styles.textStyle}
            dropdownTextStyle={styles.textStyle}
            options={['Beginner', 'Intermediate', 'Expert']}/>
          <ModalDropdown
            defaultValue="Be in contact with a trainer"
            style={styles.modal}
            dropdownStyle={styles.dropDownModal}
            textStyle={styles.textStyle}
            dropdownTextStyle={styles.textStyle}
            options={['Mario Bianchi', 'Alessio Saveri', 'Silvia Parinello']}/>

          <TouchableOpacity>
            <Text  style={styles.modal}>Search sport clubs around you</Text>
          </TouchableOpacity>
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
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  modal: {
    width:300,
    borderBottomWidth:  2,
    borderColor: "#fb5b5a",
    marginBottom: 40
  },
  dropDownModal: {
    width:300
  },
  textStyle: {
    fontSize: 20,
  }
});

export default Student;

