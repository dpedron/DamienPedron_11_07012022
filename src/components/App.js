import '../styles/css/App.css';
import Banner from './Banner';
import Slogan from './Slogan';
import Gallery from './Gallery';
import Footer from './Footer';
import Carousel from './Carousel';
import Info from './Info';

function App() {
  return (

    // HOMEPAGE //

/*     <>
      <Banner />
      <main>
        <Slogan />
        <Gallery />
      </main>
      <Footer />
    </> */

    // HOUSING PAGE //

    <>
    <Banner />
    <main>
    <Carousel />
    <Info />
    </main>
    <Footer />
  </>
  );
}

export default App;
