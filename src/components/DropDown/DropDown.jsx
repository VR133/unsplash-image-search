import React, {useState} from 'react'
import {DropDownItems, StyledDropDown, Trigger} from './DropDown.styles'

const DropDown = ({triggerTittle, children}) => {

    const [showDropDown, setShowDropDown] = useState(false)

    return <StyledDropDown>
        <Trigger onClick={() => setShowDropDown((currState) => !currState)}>{triggerTittle}</Trigger>
        {showDropDown ? <DropDownItems>{children}</DropDownItems> : null}
    </StyledDropDown>;
};

export default DropDown