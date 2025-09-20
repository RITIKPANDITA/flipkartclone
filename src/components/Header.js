import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({
  title,
  leftIcon,
  onPress,
  rightIcon,
  onRightIconPress,
  rightText,
  onRightPress,
  backgroundColor = "#FFF",
  titleColor = "#000",
}) {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={styles.container}>
        {/* Left Icon */}
        <View style={styles.side}>
          {leftIcon && (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
              {leftIcon}
            </TouchableOpacity>
          )}
        </View>

        {/* Title */}
        <View style={styles.center}>
          <Text style={[styles.title, { color: titleColor }]} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Right Side */}
        <View style={styles.sideRight}>
          {rightIcon && (
            <TouchableOpacity onPress={onRightIconPress} activeOpacity={0.7}>
              {rightIcon}
            </TouchableOpacity>
          )}
          {rightText && (
            <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
              <Text style={styles.rightText}>{rightText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFF",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 40,
  },
  side: {
    width: 40,
    alignItems: "flex-start",
  },
  center: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  sideRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 80,
  },
  rightText: {
    fontSize: 16,
    color: "#007BFF",
    marginLeft: 8,
  },
});
