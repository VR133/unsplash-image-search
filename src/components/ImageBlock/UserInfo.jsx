import React from 'react'
import {StyledUserInfo} from './_.styles'

const UserInfo = ({user}) => {
    return <StyledUserInfo>
        <img src={user.profile_image.small} alt=""/>
        <div>{user.first_name} {user.last_name}</div>
    </StyledUserInfo>;
};

export default UserInfo