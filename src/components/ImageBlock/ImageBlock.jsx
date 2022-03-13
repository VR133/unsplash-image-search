import React from 'react'
import UserInfo from './UserInfo'
import {StyledImage, StyledImageBlock, StyledTags} from './_.styles'

const ImageBlock = ({item}) => {

    return <StyledImageBlock>
        <UserInfo user={item.user}/>
        <StyledImage src={item.urls.regular} alt={item.alt_description} />
        <StyledTags>
            {item.tags.map((tag) => <span>#{tag.title}&nbsp;</span>)}
        </StyledTags>
    </StyledImageBlock>;
};

export default ImageBlock