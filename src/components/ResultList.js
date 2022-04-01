import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import React from "react";
import Restaurant from "./Restaurant";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })}>
              <Restaurant data={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default withNavigation(ResultList);

const styles = StyleSheet.create({
  titleStyle: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginBottom: 5 },
  container: {
    marginBottom: 10,
  },
});
