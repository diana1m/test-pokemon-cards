import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/operations';


const HomePage = lazy(() => import('../../pages/Home'));
const PokemonsPage = lazy(() => import('../../pages/Pokemons'));

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemons(1));
      }, [dispatch]);

  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokemons" element={<PokemonsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;
