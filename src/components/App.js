import '../styles/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import Error from './Error';

/**
 * This is the router of the app
 */

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
