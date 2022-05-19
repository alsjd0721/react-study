//client ID : 9TqOB6f31r_ZgYF_I2o9 || SECRET : sqc3ZDhXp6
import { useEffect, useState } from "react";
import { getMovies } from "../../Apis/Index";
import MovieList from "../templates/Movie/List";
import SearchForm from "../templates/Movie/SearchForm";

const Movie = () => {
  const [params, setParams] = useState({
    query: "",
    country: "ALL",
  });
  const { query, country } = params;

  const [items, setItems] = useState([]);
  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!query) return; //보통 해당값이 없으면 이렇게 씀

    // const params = { query: title, country: country };

    // if (country === "ALL") {
    //   delete params.country;
    // } //바로 밑과 같은 내용
    const params = { query };

    if (country !== "ALL") {
      params.country = country;
    }

    const { items } = await getMovies(params); //await은 getMovies가 실행 될때까지 대기함
    setItems(items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />
      <MovieList data={items} />
    </>
  );
};
export default Movie;
