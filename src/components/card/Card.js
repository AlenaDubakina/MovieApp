import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

const Card = ({ id, poster, title, name }) => {
  const img = 'https://image.tmdb.org/t/p/w300';
  const altImg =
    'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg';

  return (
    <Link className={styles.cardsLink} to={`/${name}/${id}`}>
      <div className={styles.cards}>
        <img
          className={styles.card}
          src={poster ? `${img}${poster}` : altImg}
          alt={title}
        />
        <b className={styles.cardTitle}>{title}</b>
      </div>
    </Link>
  );
};

export default Card;
