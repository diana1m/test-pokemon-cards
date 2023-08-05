import { TagsCard, WrapForTags, Wrapper } from "./CardItem.styled";


export const CardItem = ({poke}) => {
    return(
        <Wrapper>
            <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
            <img src={poke.sprites.other.dream_world.front_default} alt={poke.name} width={"150px"} height={"180px"}/>
            <WrapForTags>{poke.types.map(item=> <TagsCard props={item.type.name} key={item.slot}>{item.type.name} </TagsCard>)} </WrapForTags>  
            <ul>
                {poke.stats.map(item => 
                <li key={item.stat.name}> 
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