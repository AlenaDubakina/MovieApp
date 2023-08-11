import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './Actor.module.css';

const Actor = () => {
  const [actor, setActor] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setActor(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.actor}>
      <div className={styles.actorImage}>
        <img
          className={styles.actorBackImage}
          src={`https://image.tmdb.org/t/p/w300${
            actor ? actor.profile_path : ''
          }`}
          alt={''}
        />
      </div>
      <div className={styles.actorDetail}>
        <div className={styles.actorDetailLeft}>
          <div>
            <img
              className={styles.actorPoster}
              src={`https://image.tmdb.org/t/p/w300${
                actor ? actor.profile_path : ''
              }`}
              alt={''}
            />
          </div>
        </div>
        <div className={styles.actorDetailRigth}>
          <div className={styles.actorDetailRigthTop}>
            <div className={styles.actorName}>{actor ? actor.name : ''}</div>
            <div>{actor ? 'Place of birth: ' + actor.place_of_birth : ''}</div>
            <div>{actor ? 'Birthday: ' + actor.birthday : ''}</div>
          </div>
          <div className={styles.actorBottom}>
            <div className={styles.actorBiography}>Biography</div>
            <div>{actor ? actor.biography : ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;
