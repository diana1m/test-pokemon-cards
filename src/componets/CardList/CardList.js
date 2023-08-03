
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectPage, selectPokemons } from "../../redux/selectors";
// import { CardItem } from "../CardItem/CardItem";
import { Btn, List, BtnGoBack, Container} from "./CardList.styled";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { fetchPokemons } from "../../redux/operations";
import { changePage } from "../../redux/slice";
import { Loader } from "../Loader/Loader";
import { useLocation } from "react-router-dom";
import { CardItem } from "../CardItem/CardItem";

export const CardList = () => {
    const pokemons = useSelector(selectPokemons);
    const pages = useSelector(selectPage);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLoadMore = () => {
        dispatch(changePage(pages+1))
      };
    
    useEffect(() => {
        dispatch(fetchPokemons(pages));
    }, [dispatch, pages]);

    return(
        <Container>
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
            {isLoading && <Loader/>}
            <List>
                
                {pokemons.map(poke=><CardItem key = {poke.id} poke={poke}/>)}
                    {/* <h2>{poke.name}</h2>
                    <img src={poke.sprites.front_default} alt={poke.name} />
                    <p>type: {poke.types.forEach(item=>item.type.name)}</p> */}
                    
            </List>
            {/*<ListTweets>
                {users.map(user => <CardItem key={user.id} id={user.id} user={user}/>)}
            </ListTweets> */}
            {!isLoading && 
            <Btn type="button" onClick={handleLoadMore} disabled={pages === 20}>
            Load more
            </Btn>} 
        </Container>
    )
}