import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useYelp from "../hooks/useYelp";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, searchResults, errorMsg] = useYelp();

  const filterResultsByPrice = price => {
    //price === "$" || "$$" || "$$$" || "$$$$"
    return searchResults.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchAPI(searchTerm)}
      />
      {errorMsg !== "" ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultList results={filterResultsByPrice("$")} title={"Cost Efective"} />
        <ResultList results={filterResultsByPrice("$$")} title={"Bit Pricier"} />
        <ResultList results={filterResultsByPrice("$$$")} title={"Big Spender"} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
