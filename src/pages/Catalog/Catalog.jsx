import CarCard from 'components/CarCard/CarCard';
import React, { useEffect, useState } from 'react';
import { LoadMoreBtn, Ul } from './Catalog.styled';
import { GlobalContainer } from 'style/global';
import FilterForm from 'components/FilterForm/FilterForm';
import { advertsSelector } from 'redux/adverts/selectors';
import { filterAllSelector } from 'redux/filteredAdverts/selectors';
import { useSelector } from 'react-redux';

function Catalog() {
  const realAdverts = useSelector(advertsSelector);
  const { isFiltered, filteredAdverts } = useSelector(filterAllSelector);
  const [currentPage, setCurrentPage] = useState(0);
  const [advertsShow, setAdvertsShow] = useState([]);
  const [elemensCount] = useState(8);

  useEffect(() => {
    let adverts;
    if (isFiltered) {
      adverts = filteredAdverts;
    } else {
      adverts = realAdverts;
    }
    setAdvertsShow(prev => [
      ...prev,
      ...adverts.slice(
        currentPage * elemensCount,
        currentPage * elemensCount + elemensCount
      ),
    ]);
  }, [realAdverts, isFiltered, filteredAdverts, currentPage, elemensCount]);

  const onLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <section>
      <GlobalContainer>
        <FilterForm clearList={setAdvertsShow} clearPage={setCurrentPage} />
        <Ul>
          {advertsShow.map(car => (
            <CarCard carInfo={car} key={car.id} />
          ))}
        </Ul>

        {advertsShow.length !==
          (isFiltered ? filteredAdverts.length : realAdverts.length) && (
          <LoadMoreBtn type="button" onClick={onLoadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </GlobalContainer>
    </section>
  );
}

export default Catalog;
