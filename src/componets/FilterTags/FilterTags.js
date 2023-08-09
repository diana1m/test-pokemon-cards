import { useDispatch, useSelector } from "react-redux"
import { selectFilterTags, selectTypes } from "../../redux/selectors";
import { useEffect } from "react";
import { getTypes } from "../../redux/operations";
import { TagsBtn, Wrapper } from "./FilterTags.styled";
import { changeFilterTags, changePage } from "../../redux/slice";

export const FilterTags=()=>{
    const dispatch = useDispatch();
    const types = useSelector(selectTypes);
    const filterTags = useSelector(selectFilterTags);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleBtn (type) {
        dispatch(changePage(1));
        dispatch(changeFilterTags(type));
        // dispatch(getPokemonsByTypes({page, perPage, type}));
        // console.log(filterTags.length)
        // if (filterTags.length === 0) {
        //     dispatch(fetchPokemons({page, perPage}))
        // }
        // dispatch(getPokemonData(result));
    } 

    return(
        <Wrapper>
            {types.map(type => 
            <TagsBtn key={type} type="button" 
            color={type} 
            isActive={filterTags.includes(type)} 
            onClick={()=>handleBtn(type)} 
        >
                {type}
            </TagsBtn>)}
        </Wrapper>
    )
}