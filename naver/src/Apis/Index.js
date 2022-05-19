import axios from "axios";

export const getMovies = async (params) => {
  const config = {
    url: "/v1/search/movie.json",
    headers: {
      "X-Naver-Client-Id": "9TqOB6f31r_ZgYF_I2o9",
      "X-Naver-Client-Secret": "sqc3ZDhXp6",
    },
    method: "GET",
    params,
  };
  const result = await axios(config);
  return result.data;
};
