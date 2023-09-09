import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redux/adverts/operations';
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
