import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/NotFound';

/**
 * This is the router of the app
 */

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes basename="/DamienPedron_11_07012022">
      <Route exact path="/DamienPedron_11_07012022/" element={<Home />} />
      <Route
        path="/DamienPedron_11_07012022/housing-:id"
        element={<Housing />}
      />
      <Route path="/DamienPedron_11_07012022/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
