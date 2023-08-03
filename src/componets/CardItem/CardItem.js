

import { Wrapper, LogoPicture, TweetsPicture, Line, AvatarWrapper, Avatar, Text, Btn } from "./CardItem.styled"
import { editTweet } from "../../redux/operations";
import { useDispatch } from "react-redux";


export const CardItem = ({id, user}) => {
    // const dispatch = useDispatch();

    // const handleClick= () => {
    //     dispatch(editTweet(
    //         user.isFollowed
    //         ? { id, followers: user.followers - 1, isFollowed: false }
    //         : { id, followers: user.followers + 1, isFollowed: true }) 
    //     );
    // };

    return(
        <Wrapper>
            {/* <LogoPicture>
                <source srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
                <img src={logo1x} alt="logo" />
            </LogoPicture>

            <TweetsPicture>
                <source srcSet={`${picture1x} 1x, ${picture2x} 2x`} />
                <img src={picture1x} alt="decoration background" />
            </TweetsPicture>
            
            <Line/>
            <AvatarWrapper/>
            <Avatar
                alt="user avatar"
                src={`${user.avatar}`}
                width="62px"
                height="62px"
                />
            
            <Text>{user.tweets} Tweets</Text>
            <Text>{new Intl.NumberFormat('en').format(user.followers)} followers
                
            </Text>
            <Btn type="button" isFollow={user.isFollowed} onClick={handleClick}>{user.isFollowed ? "Following" : "Follow"}</Btn> */}
        </Wrapper>
        
    )
}

// ContactsItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// }