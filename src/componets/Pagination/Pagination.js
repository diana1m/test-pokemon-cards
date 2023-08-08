import { useDispatch, useSelector } from 'react-redux';
import { selectCount, selectPage, selectPerPage } from '../../redux/selectors';
import { changePage, changePerPage } from '../../redux/slice';
import { SelectStyled, Wrapper } from './Pagination.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';


const options = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
  ];

export const Pagination = () => {
    const page = useSelector(selectPage);
    const perPage = useSelector(selectPerPage);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleSelect = (selectedOption) => {
        dispatch(changePerPage(selectedOption.value));
        console.log("select", selectedOption.value)
        console.log("perPage", perPage)
    }

    return(
        <Wrapper >
            <SelectStyled
                defaultValue={perPage}
                onChange={handleSelect}
                options={options}
                placeholder={perPage}
                value={perPage}
            />
            <PaginationControl
                page={page}
                between={3}
                total={count}
                limit={perPage}
                changePage={(currentPage) => {
                dispatch(changePage(currentPage)); 
                console.log(currentPage);
                }}
                ellipsis={2}
            />
        </Wrapper>
    )
}