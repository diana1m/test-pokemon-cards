import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilterName} from '../../redux/selectors';
import { changeFilterName } from '../../redux/slice';
import { StyledInput } from './FilterName.styled';



export const FilterName = () => {
    const filterName = useSelector(selectFilterName);
    const dispatch = useDispatch();

    const handleFilter = evt =>{
        dispatch(changeFilterName(evt.target.value.toLowerCase()));
    }
    
    return(
        < >
            <StyledInput value={filterName} onChange={handleFilter} type="text" name="filter" placeholder='Find Pokemon by name'/>
            {/* <Btn type="submit">
                <Icon/>
            </Btn> */}
        </>    
    )
}