import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import SingleMovie from '../pages/SingleMovie';
import TvShows from '../pages/TvShows';
import SearchResultPage from '../pages/SearchResultPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie' element={<Movies />} />
      <Route path='/movie/:id' element={<SingleMovie />} />
      <Route path='/tv' element={<TvShows />} />
      <Route path='/tv/:id' element={<SingleMovie />} />
      <Route path='/search/:id' element={<SearchResultPage/>} />
    </Routes>
  );
}

export default AllRoutes;
