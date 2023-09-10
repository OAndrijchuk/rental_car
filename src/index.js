import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { GlobalStyles } from 'style/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="/rental_car">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
          <ToastContainer autoClose="4000" />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </PersistGate>
);
