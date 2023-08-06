import { useDispatch, useSelector } from "react-redux"
import { selectFilterTags, selectTypes } from "../../redux/selectors";
import { useEffect } from "react";
import { getTypes } from "../../redux/operations";
import { TagsBtn, Wrapper } from "./FilterTags.styled";
import { changeFilterTags } from "../../redux/slice";

export const FilterTags=()=>{
    const dispatch = useDispatch();
    const types = useSelector(selectTypes);
    const filterTags = useSelector(selectFilterTags);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    function handleBtn (type) {
        dispatch(changeFilterTags(type));
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