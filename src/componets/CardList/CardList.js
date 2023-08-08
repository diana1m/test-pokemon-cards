import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { selectFilterName, selectFilterTags, selectIsLoading, selectIsLoadingPokemons, selectPage, selectPerPage, selectPokemons, selectResult } from "../../redux/selectors";
import { fetchPokemons, getPokemonData} from "../../redux/operations";
// import { changePage } from "../../redux/slice";

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
    const filterName = useSelector(selectFilterName);
    const filterTags = useSelector(selectFilterTags);

    const dispatch = useDispatch();
    const location = useLocation();

    const filterPokemons = pokemons
    .filter(pokemon => pokemon.name.includes(filterName.toLowerCase()))


    const filterByTags = () => {
        if (filterTags.length === 0) {
            return filterPokemons;
        }
        const newArr = filterPokemons.filter(pokemon => pokemon.types.length === 1  
            ? filterTags.includes(pokemon.types[0].type.name) 
            : (filterTags.includes(pokemon.types[1].type.name) || filterTags.includes(pokemon.types[0].type.name)))
        return newArr;
    };
    

    // const handleLoadMore = () => {
    //     dispatch(changePage(page+1))
    //   };
    
    useEffect(() => {
        dispatch(fetchPokemons({page, perPage}));
    }, [dispatch, page, perPage]);

    useEffect(()=>{
        dispatch(getPokemonData(result));
    }, [dispatch, result])


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

            <Pagination/>
             
            <FilterTags/>
            
            {isLoadingPokemons && <Loader/> }
            {(!isLoadingPokemons && filterByTags().length === 0)
                    ? <Notification>Nothing was found for your request
                        
                    </Notification> 
                    : <List>
                    {filterByTags().map(poke=><CardItem key = {poke.id} poke={poke}/>)}
                </List>
            } 
            
            
            {/* {(!isLoadingPokemons && filterByTags().length !== 0) &&
            <Btn type="button" onClick={handleLoadMore} disabled={page === 20}>
            Load next page
            </Btn>}  */}
        </Container>
    )
}