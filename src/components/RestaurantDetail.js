import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const RestaurantDetail = ({ navigation }) => {
  const [details, setDetails] = useState({});
  const id = navigation.getParam("id");

  const getDetails = async id => {
    const response = await yelp.get(`/${id}`);
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  if (!details) return null;

  return (
    <View>
      <Text>{details.name}</Text>
      <FlatList
        data={details.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.imageStyle} />}
      />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({ imageStyle: { width: 300, height: 200 } });
