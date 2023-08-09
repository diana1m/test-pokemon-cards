import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { selectFilterName, selectFilterTags, selectIsFilterNamePokemon, selectIsLoading, selectIsLoadingPokemons, selectPage, selectPerPage, selectPokemons, selectResult } from "../../redux/selectors";
import { fetchPokemons, getPokemonByName, getPokemonData, getPokemonsByTypes} from "../../redux/operations";

import { List, BtnGoBack, Container, WrapForBtn, Notification} from "./CardList.styled";
import { FiArrowLeft } from "react-icons/fi";
import { Loader } from "../Loader/Loader";
import { CardItem } from "../CardItem/CardItem";
import { FilterTags } from "../FilterTags/FilterTags";
import { FilterName } from "../FilterName/FilterName";
import { Pagination } from "../Pagination/Pagination";


export const CardList = () => {
    const pokemons = useSelector(selectPokemons);
    const result = useSelector(selectResult);
    const page = useSelector(selectPage);
    const perPage = useSelector (selectPerPage);
    const isLoading = useSelector(selectIsLoading);
    const isLoadingPokemons = useSelector(selectIsLoadingPokemons);
    const isFilterNamePokemon = useSelector(selectIsFilterNamePokemon);
    const filterName = useSelector(selectFilterName);
    const filterTags = useSelector(selectFilterTags);

    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(() => {
        if (filterTags.length !== 0){
            dispatch(getPokemonsByTypes({page, perPage, type: filterTags[0]}));
        } else {
            dispatch(fetchPokemons({page, perPage}));
        }
        
    }, [dispatch, page, perPage, filterTags]);


    useEffect(()=>{
        dispatch(getPokemonData(result));
    }, [dispatch, result])

    useEffect(()=>{
        if (filterName.length === 0){
            dispatch(getPokemonData(result));
        } else {
            const timeoutId = setTimeout(() => {
                dispatch(getPokemonByName(filterName));
              }, 500); 
          
              return () => {
                clearTimeout(timeoutId);
              };  
        }
    }, [dispatch, filterName, result])

    return(
        <Container>
            {isLoading && <Loader/>}
            <WrapForBtn>
              <BtnGoBack to={location.state?.from ?? "/"} >
                <FiArrowLeft
                    style={{
                        cursor: "pointer",
                        padding: "2px",
                        width: "30px",
                        height: "25px",
                    }}
                    />
                <span>Go Back</span>
                </BtnGoBack>

                <FilterName/>  
            </WrapForBtn>
             
            <FilterTags/>
            
            {isLoadingPokemons && <Loader/> }
            {((!isLoadingPokemons && pokemons.length === 0) || !pokemons[0])
                    ? <Notification>Nothing was found for your request
                        
                    </Notification> 
                    : <List>
                    {pokemons.map(poke=><CardItem key = {poke.id} poke={poke}/>)}
                </List>
            } 
            {(!isLoadingPokemons && pokemons.length !== 0 && !isFilterNamePokemon) && 
                <Pagination/>
            }
            
        </Container>
    )
}