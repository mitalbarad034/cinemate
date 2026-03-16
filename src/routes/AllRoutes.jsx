import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList ApiPath='trending' />} />
      <Route path="/movies" element={<MovieList ApiPath='trending' />} />
      <Route path="/trending" element={<MovieList ApiPath='trending' />} />
      <Route path="/movie/:id" element={<MovieDetail ApiPath='movies' />} />
      <Route path="/search" element={<Search ApiPath='search' />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;