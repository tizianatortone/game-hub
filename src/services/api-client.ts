import axios from "axios";

export default axios.create({
  params: {
    baseURL: "https://api.rawg.io/api",
    key: "8b37a025acff47ff90ca81ce73290fe2",
  },
});
