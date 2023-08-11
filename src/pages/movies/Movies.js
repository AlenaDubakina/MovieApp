import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import Card from '../../components/card/Card';
import styles from './Movies.module.css';

const Movies = () => {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);

  return (
    <>
      <div className={styles.moviesCarousel}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}>
          {content.map((movie) => (
            <Link
              className={styles.cardsLink}
              key={movie.id}
              to={`/movie/${movie.id}`}>
              <div className={styles.movieImage}>
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.original_title}
                />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <h2 className='pageTitle'>Trending</h2>
      <div className={styles.movies}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              name={'movie'}
            />
          ))}
      </div>
    </>
  );
};

export default Movies;
