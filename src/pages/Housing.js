import Carousel from '../components/Carousel';
import Info from '../components/Info';
import { useParams } from 'react-router-dom';

function Housing() {
  let { id } = useParams();
  return (
    <main>
      <Carousel id={id} />
      <Info id={id} />
    </main>
  );
}

export default Housing;
