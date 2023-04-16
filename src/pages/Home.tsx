import { Pagination } from '../components/Pagination/Pagination';
import { Products } from '../components/Products/Products';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Pagination />
      <Products />
    </>
  );
}

export { Home };
