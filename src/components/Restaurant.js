import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Restaurant = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image_url }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>{`${data.rating} Stars | ${data.review_count} reviews`}</Text>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  container: {
    marginLeft: 15,
  },
});
