import CarCard from 'components/CarCard/CarCard';
import React, { useEffect, useState } from 'react';
import { LoadMoreBtn, Ul } from './Catalog.styled';
import { GlobalContainer } from 'style/global';
import FilterForm from 'components/FilterForm/FilterForm';
import { filterAllSelector } from 'redux/filteredAdverts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage } from 'redux/paginatonSlice/operations';
import {
  incCurrentPage,
  resetPagination,
} from 'redux/paginatonSlice/paginatonSlice';
import { clearFilter } from 'redux/filteredAdverts/filteredAdvertsSlice';

function Catalog() {
  const dispatch = useDispatch();
  const { isFiltered, filteredAdverts } = useSelector(filterAllSelector);
  const [elemensCount] = useState(8);
  const [advertsShow, setAdvertsShow] = useState([]);
  const { currentPage, totalCards } = useSelector(state => state.pagination);
  const alllAdverts = useSelector(state => state.pagination.paginationCards);

  useEffect(() => {
    if (!isFiltered) {
      dispatch(fetchPage(currentPage));
    }
  }, [dispatch, currentPage, isFiltered]);

  useEffect(() => {
    if (isFiltered) {
      console.log('filteredAdverts>>>', filteredAdverts);
      setAdvertsShow(prev => [
        ...prev,
        ...filteredAdverts.slice(
          (currentPage - 1) * elemensCount,
          (currentPage - 1) * elemensCount + elemensCount
        ),
      ]);
    } else {
      setAdvertsShow(alllAdverts);
    }
  }, [
    alllAdverts,
    isFiltered,
    filteredAdverts,
    currentPage,
    elemensCount,
    setAdvertsShow,
    dispatch,
  ]);

  useEffect(
    () => () => {
      setAdvertsShow([]);
      dispatch(clearFilter());
      dispatch(resetPagination());
    },
    [dispatch]
  );

  return (
    <section>
      <GlobalContainer>
        <FilterForm clearList={setAdvertsShow} />
        <Ul>
          {advertsShow.map(car => (
            <CarCard carInfo={car} key={car.id} />
          ))}
        </Ul>

        {advertsShow.length !==
          (isFiltered ? filteredAdverts.length : totalCards) && (
          <LoadMoreBtn
            type="button"
            onClick={() => {
              dispatch(incCurrentPage());
            }}
          >
            Load more
          </LoadMoreBtn>
        )}
      </GlobalContainer>
    </section>
  );
}

export default Catalog;
