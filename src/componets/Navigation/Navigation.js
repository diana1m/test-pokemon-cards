import { useDispatch } from 'react-redux';
import { NavLinkStyled, NavigationWrapper } from './Navigation.styled';
import { changePage } from '../../redux/slice';

export const Navigation = () => {
  const dispatch = useDispatch();

  const goPokemons= () => {
    dispatch(changePage(1))
  }

  return (
    <NavigationWrapper>
      <NavLinkStyled to="/" >
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/pokemons" onClick={goPokemons}>
        Pokemons
      </NavLinkStyled>
    </NavigationWrapper>
  );
};