import React from 'react'
import {StyledImage, StyledImageBlock, StyledTags, StyledUserInfo} from './ImageBlock.styles'

const ImageBlock = ({item}) => {

    return <StyledImageBlock>
        <StyledUserInfo>
            <img src={item.user.profile_image.small} alt=""/>
            <div>{item.user.first_name} {item.user.last_name}</div>
        </StyledUserInfo>
        <StyledImage src={item.urls.regular} alt={item.alt_description} />
        <StyledTags>
            {item.tags.map((tag, index) => <span key={index + tag.title}>#{tag.title}&nbsp;</span>)}
        </StyledTags>
    </StyledImageBlock>;
};

export default ImageBlock