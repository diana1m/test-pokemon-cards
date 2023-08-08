import { Avatar, ItemStat, ListStat, TagsCard, TitleCard, WrapForTags, Wrapper } from "./CardItem.styled";
import image from '../../images/Pokemon.png'

export const CardItem = ({poke}) => {
    return(
        <Wrapper>
            <TitleCard>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</TitleCard>
            <Avatar src={poke.sprites.other.dream_world.front_default || poke.sprites.front_default || image} alt={poke.name} width={"150px"} />
            <WrapForTags>{poke.types.map(item=> <TagsCard props={item.type.name} key={item.slot}>{item.type.name} </TagsCard>)} </WrapForTags>  
            <ListStat>
                {poke.stats.map(item => 
                <ItemStat key={item.stat.name}> 
                    <span>{item.stat.name}:</span> <span>{item.base_stat}</span> 
                </ItemStat>)}
            </ListStat>
        </Wrapper>
        
    )
}
