import React, { Component } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default class Sports extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, image: require("../../assets/tennis.jpg") },
        { id: 2, image: require("../../assets/padel.jpg") },
        { id: 3, image: require("../../assets/swimming.jpg") },
        { id: 4, image: require("../../assets/football.jpg") },
      ],
    };
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.box}>
                <Image style={styles.image} source={item.image} />
              </View>
            </TouchableOpacity>
          );
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingTop: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  image: {
    width: 330,
    height: 330,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 30,
    flexDirection: "column",
    shadowColor: "black",
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  iconFonts: {
    color: "gray",
  },
  red: {
    color: "#FF4500",
  },
});

