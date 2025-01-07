import React from 'react';
import { BrowserRouter,} from 'react-router-dom'
import AppRoutes from './routes';
import {Header, Footer} from './components/common';

const App = () => {
  return(
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Header />
      <div className='main'>
        <AppRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  )
};

export default App;