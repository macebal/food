import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchAPI = async term => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: term,
          limit: 50,
          location: "Buenos Aires",
        },
      });
      setErrorMsg("");
      setSearchResults(response.data.businesses);
    } catch (e) {
      setErrorMsg("An error ocurred when processing your request");
    }
  };

  useEffect(() => {
    searchAPI("pizza");
  }, []);

  return [searchAPI, searchResults, errorMsg];
};
