import { Avatar, TagsCard, TitleCard, WrapForStat, WrapForTags, Wrapper } from "./CardItem.styled";


export const CardItem = ({poke}) => {
    return(
        <Wrapper>
            <TitleCard>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</TitleCard>
            <Avatar src={poke.sprites.other.dream_world.front_default} alt={poke.name} width={"150px"} />
            <WrapForTags>{poke.types.map(item=> <TagsCard props={item.type.name} key={item.slot}>{item.type.name} </TagsCard>)} </WrapForTags>  
            <ul>
                {poke.stats.map(item => 
                <WrapForStat key={item.stat.name}> 
                    <span>{item.stat.name}:</span> <span>{item.base_stat}</span> 
                </WrapForStat>)}
            </ul>
        </Wrapper>
        
    )
}
