import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useYelp from "../hooks/useYelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, searchResults, errorMsg] = useYelp();

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchAPI(searchTerm)}
      />
      <Text>We've Found {searchResults.length} results</Text>
      {errorMsg !== "" ? <Text>{errorMsg}</Text> : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
