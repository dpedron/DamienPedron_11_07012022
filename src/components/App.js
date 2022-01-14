import '../styles/css/App.css';
import Header from './Header';
import Slogan from './Slogan';
import Gallery from './Gallery';
import Footer from './Footer';
import Carousel from './Carousel';
import Info from './Info';

function App() {
  return (

    // HOMEPAGE //

/*     <>
      <Header />
      <main>
        <Slogan />
        <Gallery />
      </main>
      <Footer />
    </> */

    // HOUSING PAGE //

    <>
    <Header />
    <main>
    <Carousel />
    <Info />
    </main>
    <Footer />
    </>
  );
}

export default App;
