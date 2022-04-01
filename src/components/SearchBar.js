import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import React from "react";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" color="black" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={onTermChange}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
});
