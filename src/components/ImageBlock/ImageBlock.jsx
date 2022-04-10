import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {like, unlike} from '../../shared/actions/imageActions'
import {
    Image,
    LikeUnlikeButton,
    LikeButtonBlock,
    StyledActionsBlock,
    StyledImage,
    StyledImageBlock,
    StyledTags,
    StyledUserInfo
} from './ImageBlock.styles'

const ImageBlock = ({item}) => {

    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)

    const likeUnlikeClickHandler = () => {
        if (item.liked_by_user) {
            dispatch(unlike(item.id))
        } else {
            dispatch(like(item.id))
        }
    }

    return <StyledImageBlock>
        <StyledUserInfo>
            <img src={item.user.profile_image.small} alt=""/>
            <div>{item.user.first_name} {item.user.last_name}</div>
        </StyledUserInfo>
        <Image>
            <StyledImage src={item.urls.regular} alt={item.alt_description}/>
            {userProfile?.firstName
                ? <StyledActionsBlock>
                    <LikeButtonBlock>
                        <LikeUnlikeButton onClick={likeUnlikeClickHandler}>
                            {item.liked_by_user ? <AiFillHeart/> : <AiOutlineHeart/>}
                        </LikeUnlikeButton>
                    </LikeButtonBlock>
                </StyledActionsBlock>
                : null}
        </Image>
        <StyledTags>
            {item.tags.map((tag, index) => <span key={index + tag.title}>#{tag.title}&nbsp;</span>)}
        </StyledTags>
    </StyledImageBlock>;
};

export default ImageBlock