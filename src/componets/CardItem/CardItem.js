import { Wrapper } from "./CardItem.styled"

export const CardItem = ({poke}) => {
    const types = poke.types.map(item => item.type.name);
    return(
        <Wrapper>
            <h2>{poke.name}</h2>
            <img src={poke.sprites.other.dream_world.front_default} alt={poke.name} width={"100px"} height={"100px"}/>
            <p>Type: {types.join(", ")}</p>  
            <ul>
                {poke.stats.map(item => 
                <li> 
                    {item.stat.name}: {item.base_stat}
                </li>)}
            </ul>
        </Wrapper>
        
    )
}

// ContactsItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }