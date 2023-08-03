import {Puff} from  'react-loader-spinner';
import { Overlay } from './Loader.styled';


export const Loader = () => {
    return (
        <Overlay>
            <Puff
                height="200"
                width="200"
                radius={1}
                color="#fad61f"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </Overlay>  
    )
}