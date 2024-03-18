import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "369ebade3b414f4f908c0e2addff67a2",
  },
});
