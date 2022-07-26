import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "54051ce6d559a63ba204b7ba4898b8ca",
    language: "ko-KR"
  },
});

export default instance;