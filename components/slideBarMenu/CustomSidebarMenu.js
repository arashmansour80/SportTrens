import React from "react";
import { Image, Linking, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://www.sportingclubpanda.it/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("https://www.sportingclubpanda.it/")}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL("https://www.sportingclubpanda.it/");
            }}>
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text style={styles.footer}>
        www.sportrend.it
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    color: "grey"
  }
});

export default CustomSidebarMenu;
