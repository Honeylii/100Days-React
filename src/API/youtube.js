import axios from "axios";

const KEY = "AIzaSyDy0i3Ia0I9txdW3rG3knSO4tY1hsK43kE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
