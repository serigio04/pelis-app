import React from 'react';
import { BrowserRouter,} from 'react-router-dom'
import AppRoutes from './routes';
import {Header, Footer} from './components/common';

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
};

export default App;