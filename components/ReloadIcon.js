import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../utils/index";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={PRIMARY_COLOR}
      ></Ionicons>
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});
