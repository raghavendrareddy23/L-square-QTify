import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, dataSource, type }) => {
  const [cards, setCards] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
  }, []);

  const _handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={_handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h4>
      </div>

      <div className={styles.cardWrapper}>
        {!carouselToggle ? (
          <div className={styles.wrapper}>
            {cards?.map((item) => (
              <Card data={item} type={type} key={item.id} />
            ))}
          </div>
        ) : (
          <Carousel
            data={cards}
            renderCardComponent={(item) => <Card data={item} type={type} />}
          />
        )}
      </div>
    </div>
  );
};

export default Section;
