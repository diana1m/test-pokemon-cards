import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { selectFilterName, selectFilterTags, selectIsLoading, selectIsLoadingPokemons, selectPage, selectPokemons } from "../../redux/selectors";
import { fetchPokemons} from "../../redux/operations";
import { changePage } from "../../redux/slice";

import { Btn, List, BtnGoBack, Container, WrapForBtn} from "./CardList.styled";
import { FiArrowLeft } from "react-icons/fi";
import { Loader } from "../Loader/Loader";
import { CardItem } from "../CardItem/CardItem";
import { FilterTags } from "../FilterTags/FilterTags";
import { FilterName } from "../FilterName/FilterName";



export const CardList = () => {
    const pokemons = useSelector(selectPokemons);
    const pages = useSelector(selectPage);
    const isLoading = useSelector(selectIsLoading);
    const isLoadingPokemons = useSelector(selectIsLoadingPokemons);
    const filterName = useSelector(selectFilterName);
    const filterTags = useSelector(selectFilterTags);

    const dispatch = useDispatch();
    const location = useLocation();

    console.log(filterTags)
    const filterPokemons = pokemons
    .filter(pokemon => pokemon.name.includes(filterName.toLowerCase()))
    // .filter(pokemon => filterTags.includes(pokemon.types[0].type.name) );
    // .filter(pokemon => pokemon.types[0].type.name === filterTags[0]);
    // .filter(pokemon => pokemon.types.map(type=> type.type.name === filterTags[0]));
    console.log(filterPokemons)

    const filterByTags = () => {
        if (filterTags.length === 0) {
            return filterPokemons;
        }
        const newArr = filterPokemons.filter(pokemon => pokemon.types.length === 1  
            ? filterTags.includes(pokemon.types[0].type.name) 
            : (filterTags.includes(pokemon.types[1].type.name) || filterTags.includes(pokemon.types[0].type.name)))
        return newArr;
    };
    


    const handleLoadMore = () => {
        dispatch(changePage(pages+1))
      };
    
    useEffect(() => {
        dispatch(fetchPokemons(pages));
    }, [dispatch, pages]);


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
            <List>
                {filterByTags().map(poke=><CardItem key = {poke.id} poke={poke}/>)}
            </List>
            
            {!isLoading && 
            <Btn type="button" onClick={handleLoadMore} disabled={pages === 20}>
            Load more
            </Btn>} 
        </Container>
    )
}