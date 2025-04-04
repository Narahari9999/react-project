import React from 'react';
import ReactDOM from 'react-dom/client';

import { Body, Contact, Header } from './components';
import { UserProvider } from './context/UserContext';
import store from './store';
import { Provider } from 'react-redux';

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Contact />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <UserProvider>
      <AppLayout />
    </UserProvider>
  </Provider>
);
