import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Tab, Tabs } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import PaginationPage from '../../components/pagination/PaginationPage';
import Card from '../../components/card/Card';
import styles from './Search.module.css';

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? 'person' : 'movie'
        }?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type='text'
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search...'
        />
        <Button onClick={fetchSearch} variant='contained'>
          <SearchIcon fontSize='large' />
        </Button>
      </div>
      <div className={styles.conteiner}>
        <Tabs
          value={type}
          indicatorColor='primary'
          textColor='primary'
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          aria-label='disabled tabs example'>
          <Tab className={styles.conteinerTabs} label='Search Movies' />
          <Tab label='Search Actors' />
        </Tabs>
      </div>
      <div className={styles.resultSearch}>
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path || c.profile_path}
              title={c.title || c.name}
              name={type ? 'person' : 'movie'}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>Movies not found</h2> : <h2>Actors not found</h2>)}
      </div>
      {numOfPages > 1 && (
        <PaginationPage setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
