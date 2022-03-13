import React from 'react'
import {StyledMessage} from './Message.styles';

const Message = ({children, error = false}) => {
    return <StyledMessage error={error}>
        {children}
    </StyledMessage>;
};

export default Message