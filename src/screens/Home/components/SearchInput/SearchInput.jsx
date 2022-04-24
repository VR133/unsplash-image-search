import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {search} from '../../../../shared/actions/searchActions'
import {AiOutlineEnter} from 'react-icons/ai'
import {InputBlock} from './SearchInput.styles'

const SearchInput = () => {
    const locationSearchParams = new URLSearchParams(window.location.search)
    const currentPage = Number(locationSearchParams.get('page') || 1)
    const query = locationSearchParams.get('query') || ''

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState(query)

    const triggerSearch = () => {
        navigate(`/?query=${searchQuery}`)
    }

    const changeHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            triggerSearch()
        }
    }

    useEffect(() => {
        if (searchQuery !== '') {
            dispatch(search(searchQuery, currentPage))
        }
    }, [query, currentPage])

    return <InputBlock>
        <input type="text" placeholder={'search here ...'} value={searchQuery}
               onChange={changeHandler}
               onKeyDown={keyDownHandler}/>
        <div onClick={triggerSearch}><AiOutlineEnter/></div>
    </InputBlock>;
};

export default SearchInput