import {Puff} from  'react-loader-spinner';
import { Overlay } from './Loader.styled';


export const Loader = () => {
    return (
        <Overlay>
            <Puff
                height="200"
                width="200"
                radius={1}
                color="#5CD3A8"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </Overlay>  
    )
}