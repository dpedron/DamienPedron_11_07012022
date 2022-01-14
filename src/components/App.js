import '../styles/css/App.css';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import Footer from './Footer';
import Carousel from './Carousel';
import Info from './Info';
import Error from './Error';

function App() {
  return (

    // HOMEPAGE //

/*     <>
      <Header />
      <main>
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </> */

    // HOUSING PAGE //

/*     <>
    <Header />
    <main>
    <Carousel />
    <Info />
    </main>
    <Footer />
    </> */

    // 404 PAGE //

    <>
    <Header />
    <Error />
    <Footer />
    </>
  );
}

export default App;
