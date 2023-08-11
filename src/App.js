import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Movies from './pages/movies/Movies';
import Actors from './pages/Actors';
import Error from './pages/Error';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Movie from './pages/movie/Movie';
import Actor from './pages/actor/Actor';
import ErrorBoundary from './components/ErrorBoundary';
import Search from './pages/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ErrorBoundary fallback={<p>Something went wrong</p>}></ErrorBoundary>
      <div className='App'>
        <Routes>
          <Route index element={<Movies />} />
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/popular' element={<Popular />}></Route>
          <Route path='movies/top_rated' element={<TopRated />}></Route>
          <Route path='movies/upcoming' element={<Upcoming />}></Route>
          <Route path='person/:id' element={<Actor />}></Route>
          <Route path='actors/*' element={<Actors />} />
          <Route path='search' element={<Search />}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <ErrorBoundary fallback={<p>Something went wrong</p>}></ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
