import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../card/Card';
import PaginationPage from '../pagination/PaginationPage';
import styles from './FilmList.module.css';

const FilmList = ({ type, name }) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${name}/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <h2 className='pageTitle'>{type.toUpperCase()}</h2>
      <div className={styles.movies}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path || c.profile_path}
              title={c.title || c.name}
              name={name}
            />
          ))}
      </div>
      <PaginationPage setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default FilmList;
