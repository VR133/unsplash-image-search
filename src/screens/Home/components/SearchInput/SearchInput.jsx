import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {search} from '../../../../shared/actions/searchActions'
import {AiOutlineEnter} from 'react-icons/ai'
import {StyledSearchInput, SearchBtn, Suggestions, InputBlock} from './SearchInput.styles'

const SearchInput = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const locationSearchParams = new URLSearchParams(window.location.search)
    const currentPage = Number(locationSearchParams.get('page') || 1)
    const query = locationSearchParams.get('query') || ''

    const [inputValue, setInputValue] = useState(query)
    const [filteredSuggestions, setFilteredSuggestions] = useState([])

    const searchQueryReducer = useSelector(state => state.searchQuery)
    const {items: searchQuerySuggestions} = searchQueryReducer

    const changeHandler = (event) => {
        setInputValue(event.target.value)

        const suggestions = event.target.value.length !== 0
            ? searchQuerySuggestions.filter((item) => item.text.includes(event.target.value))
            : searchQuerySuggestions

        setFilteredSuggestions(suggestions)
    }

    const triggerSearch = () => {
        navigate(`/?query=${inputValue}`)
    }

    const showSuggestions = () => {
        setFilteredSuggestions(searchQuerySuggestions)
    }

    const hideSuggestions = () => {
        setFilteredSuggestions([])
    }

    const inputKeyDownHandler = (event) => {
        if (event.key === 'Enter') {
            triggerSearch()
        }
    }

    const suggestionMouseDownHandler = (item) => {
        setInputValue(item.text)
        triggerSearch()
    }

    useEffect(() => {
        if (inputValue !== '') {
            dispatch(search(inputValue, currentPage))
        }
    }, [query, currentPage])

    return <InputBlock>
        <StyledSearchInput roundedBottom={!filteredSuggestions.length}>
            <input
                type="text"
                placeholder={'search here ...'}
                value={inputValue}
                onChange={changeHandler}
                onKeyDown={inputKeyDownHandler}
                onFocus={showSuggestions}
                onBlur={hideSuggestions}
            />
        </StyledSearchInput>
        <SearchBtn onClick={triggerSearch} roundedBottom={!filteredSuggestions.length}>
            <AiOutlineEnter/>
        </SearchBtn>
        {filteredSuggestions.length
            ? (<Suggestions>
                {filteredSuggestions.map(item => <div
                    key={item.id}
                    onMouseDown={() => suggestionMouseDownHandler(item)}>
                    {item.text}
                </div>)}
            </Suggestions>)
            : null
        }
    </InputBlock>
};

export default SearchInput