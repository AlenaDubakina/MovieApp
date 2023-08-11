import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerNav}>
        <Link
          onClick={() => window.scroll(0, 0)}
          className={styles.headerMain}
          to='/'>
          <h2>Movie App</h2>
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className={styles.headerLink}
          to='/movies/popular'>
          <span>Popular</span>
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className={styles.headerLink}
          to='/movies/top_rated'>
          <span>Top Rated</span>
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className={styles.headerLink}
          to='/movies/upcoming'>
          <span>Upcoming</span>
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className={styles.headerLink}
          to='actors'>
          <span>Actors</span>
        </Link>
        <div>
          <Link
            onClick={() => window.scroll(0, 0)}
            className={styles.headerLink}
            to='search'>
            <SearchIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
