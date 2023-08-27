import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, dataSource, filterSource, type }) => {
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectFilterIndex, setSelectFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  // useEffect(() => {
  //   dataSource().then((data) => {
  //     setCards(data);
  //   });
  // }, [dataSource]);
  

  useEffect(()=>{
    setCards(dataSource)
  }, [])

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([{ key: "all", label: "All" }, ...data]);
      });
    }
  }, [filterSource, filters]);

  const filteredCards = cards.filter((card) =>
    selectFilterIndex !== 0
      ? card.genre.key === filters[selectFilterIndex].key
      : card
  );

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
    
      {filterSource && (
        <Filter
          data={filters}
          selectFilterIndex={selectFilterIndex}
          setSelectFilterIndex={setSelectFilterIndex}
        />
      )}

      <div className={styles.cardWrapper}>
        {!carouselToggle ? (
          <div className={styles.wrapper}>
            {console.log(filteredCards)}
            {filteredCards?.map((item) => (
              <Card data={item} type={type} key={item.id} />
            ))}
          </div>
        ) : (
          <Carousel
            data={filteredCards}
            renderCardComponent={(item) => <Card data={item} type={type} />}
          />
        )}
      </div>
    </div>
  );
};

export default Section;