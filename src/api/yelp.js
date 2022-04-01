import axios from "axios";

const API_KEY =
  "jaN64v7GxFL5MV023H9hKx9SxQpNXID5ZATzGPS2uuIQ3P6poYcUIHR7zo4GOi4BgnQ_Ioc3h7uZiH0oR9ZYgj6VpfNr5ARZBjG2fbc0VkqvFPuW7KgXJvTMyMGmYXYx";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
