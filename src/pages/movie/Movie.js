import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './Movie.module.css';

const Movie = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovie(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.movie}>
      <div className={styles.movieImage}>
        <img
          className={styles.movieBackImage}
          src={`https://image.tmdb.org/t/p/w300${
            movie ? movie.backdrop_path : ''
          }`}
          alt={''}
        />
      </div>
      <div className={styles.movieDetail}>
        <div className={styles.movieDetailLeft}>
          <div>
            <img
              className={styles.moviePoster}
              src={`https://image.tmdb.org/t/p/w300${
                movie ? movie.poster_path : ''
              }`}
              alt={''}
            />
          </div>
        </div>
        <div className={styles.movieDetailRigth}>
          <div className={styles.movieDetailRigthTop}>
            <div className={styles.movieName}>
              {movie ? movie.original_title : ''}
            </div>
            <div>{movie ? 'Release date: ' + movie.release_date : ''}</div>
          </div>
          <div className={styles.movieBottom}>
            <div className={styles.movieDescription}>Description</div>
            <div>{movie ? movie.overview : ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
