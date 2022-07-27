import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: " Client-ID nscfjTvawtrxLnkqmlaSmDf_N8kF6eB9keXKXrVTiP8",
  },
});
