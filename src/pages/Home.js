// import helloImg from '../images/hello.gif';
import pikachu from '../images/Pikachu.png';
import { Wrapper } from './Home.styled';

export default function Home() {
    return(
        <Wrapper>
            <h1>Welcome to the Pokemon App</h1>
            <img src={pikachu} alt="hello" width="380px"/>
        </Wrapper> 
    )
}