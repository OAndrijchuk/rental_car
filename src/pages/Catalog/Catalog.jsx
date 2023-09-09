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
import NothingFound from 'components/NothingFound/NothingFound';
import Loader from 'components/Loader/Loader';
import {
  allPaginationSelector,
  paginationCardsSelector,
} from 'redux/paginatonSlice/selectors';

function Catalog() {
  const dispatch = useDispatch();
  const { isFiltered, filteredAdverts } = useSelector(filterAllSelector);
  const [elemensCount] = useState(8);
  const [advertsShow, setAdvertsShow] = useState([]);
  const { currentPage, totalCards, isPageLoading } = useSelector(
    allPaginationSelector
  );
  const alllAdverts = useSelector(paginationCardsSelector);

  useEffect(() => {
    if (!isFiltered) {
      dispatch(fetchPage(currentPage));
    }
  }, [dispatch, currentPage, isFiltered]);

  useEffect(() => {
    if (isFiltered) {
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
        {isPageLoading && <Loader />}
        {advertsShow.length ? (
          <Ul>
            {advertsShow.map(car => (
              <CarCard carInfo={car} key={car.id} />
            ))}
          </Ul>
        ) : (
          !isPageLoading && <NothingFound />
        )}

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
