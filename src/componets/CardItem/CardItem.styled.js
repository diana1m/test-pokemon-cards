import styled from "styled-components";

export const typesColor = {
    "normal": "#BFBEBD",
    "fighting": "#E04532",
    "flying": "#37C5B0",
    "poison": "#C02053",
    "ground": "#8E5633",
    "rock": "#557679", 
    "bug": "#93B45C",
    "ghost": "#CFCA57",
    "steel" : "#9AA1BF",
    "fire": "#FF520C",
    "water": "#6082C9",
    "grass": "#3DAF08",
    "electric" : "#2545C7",
    "psychic" : "#B62AA7",
    "ice" :  "#4EA3E5",
    "dragon" : "#962EBD",
    "dark" : "#686563",
    "fairy" : "#D53CA4",
    "unknown" : "#9BB9AF",
    "shadow" : "#665353",
}

export const Wrapper = styled.li`
    width: 200px;
    padding: 15px;
    background: #e6e3d2;
    color: #1D1515;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    display: flex;
    gap:15px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
    width: 90%;
    max-width: 480px;
    font-size: 28px;
    }
`;

export const TitleCard = styled.h2`
    font-size: 26px;
    letter-spacing: 1.2;
    color: #1D1515;

    @media (max-width: 768px) {
    font-size: 38px;
    }
`

export const Avatar = styled.img`
    width: 150px;
    height: 180px;

    @media (max-width: 768px) {
    width: 80%;
    max-width: 250px;
    height: auto;
    margin-bottom: 20px;
    }
`

export const WrapForTags = styled.div`
    display: flex;
    gap:10px;

`

export const TagsCard = styled.span`
    color: #fefff1;
    background-color: ${props => typesColor[props.props]};
    border-radius: 4px;
    padding: 2px 8px;

    @media (max-width: 768px) {
    font-size: 26px;
    }
`

export const ListStat = styled.ul`
    margin: 0;
    padding: 0;
`

export const ItemStat = styled.li`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    
`


