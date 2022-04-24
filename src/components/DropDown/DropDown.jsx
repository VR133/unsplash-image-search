import React, {useState} from 'react'
import {DropDownItems, StyledDropDown, Trigger} from './DropDown.styles'

const DropDown = ({triggerTittle, children}) => {

    const [showDropDown, setShowDropDown] = useState(false)

    const triggerClickHandler = () => {
        setShowDropDown((currState) => !currState)
    }

    return <StyledDropDown>
        <Trigger onClick={triggerClickHandler}>{triggerTittle}</Trigger>
        {showDropDown
            ? <DropDownItems>{children}</DropDownItems>
            : null
        }
    </StyledDropDown>
};

export default DropDown