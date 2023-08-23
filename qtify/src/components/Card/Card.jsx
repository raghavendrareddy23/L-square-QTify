import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  if (!data || !data.image || !data.follows || !data.title || !data.songs) {
    return null;
  }


  const getCard = (type) => {
    switch (type) {
      case "album":
        return (
          <Tooltip
            title={`${data.songs.length} songs`}
            className={styles.tooltip}
            placement="top"
            arrow
          >
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={data.image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${data.follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{data.title}</p>
              </div>
            </div>
          </Tooltip>
        );
      case "song": {
        const { image, title } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                <div className={styles.banner}>
                  <Chip
                    label={`${data.likes} likes`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return getCard(type);
};

export default Card;
