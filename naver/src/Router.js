import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Books from "./components/pages/Books";
import TopNav from "./components/organisms/TopNav";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<TopNav />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

// CORS : 브라우저 JS에서 다른 도메인으로 HTTPS요청하면 요청을 제한함
// 1. 요청서버에서 프론트도메인을 허용
// 2. 서버를 직접만들어서 프론트에 적용 -> 커스텀 서버 -> 네이버
// 3. WEBPACK DEV SERVER의 PROXY서버를 이용 {제일 편하지만 개발단계에서 밖에 못씀}
