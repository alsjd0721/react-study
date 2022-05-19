import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "9TqOB6f31r_ZgYF_I2o9",
    "X-Naver-Client-Secret": "sqc3ZDhXp6",
  },
});

export const getMovies = async (params) => {
  const config = {
    url: "/v1/search/movie.json",
    method: "GET",
    params,
  };
  const result = await instance(config);
  return result.data;
};

export const getBooks = async (params) => {
  const config = {
    url: "/v1/search/book.json",
    method: "GET",
    params,
  };
  const result = await instance(config);
  return result.data;
};
