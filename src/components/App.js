import '../styles/css/App.css';
import Banner from './Banner';
import Slogan from './Slogan';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Banner />
      <Slogan />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
