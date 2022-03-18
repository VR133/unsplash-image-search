import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {AiOutlineEnter} from 'react-icons/ai'
import {search} from '../../shared/actions/searchActions'
import Container from '../../components/Container/Container'
import Paginate from '../../components/Paginate/Paginate'
import ImageBlock from '../../components/ImageBlock/ImageBlock'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import {InputBlock, ResultsBlock} from './HomeScreen.styles'

const HomeScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const locationSearchParams = new URLSearchParams(window.location.search)
    const currentPage = Number(locationSearchParams.get('page') || 1)
    const query = locationSearchParams.get('query') || ''

    const [searchQuery, setSearchQuery] = useState(query)

    const searchReducer = useSelector(state => state.search)
    const {loading, items, totalPages, error, success} = searchReducer

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            triggerSearch()
        }
    }

    const changeHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    const triggerSearch = () => {
        navigate(`/?query=${searchQuery}`)
    }

    useEffect(() => {
        if (searchQuery !== '') {
            dispatch(search(searchQuery, currentPage))
        }
    }, [query, currentPage])

    return <Container>
        <InputBlock>
            <input type="text" placeholder={'search here ...'} value={searchQuery}
                   onChange={changeHandler}
                   onKeyDown={keyDownHandler}/>
            <div onClick={triggerSearch}><AiOutlineEnter /></div>
        </InputBlock>
        <ResultsBlock>
            {loading && <Loader/>}
            {error && <Message error>{error}</Message>}
            {items.length > 0
                ? items.map((element) => (
                    <ImageBlock key={element.id} item={element}/>
                ))
                : success
                    ? <Message>nothing found :(</Message>
                    : !loading && <Message>try to search something...</Message>
            }
        </ResultsBlock>
        <Paginate totalPages={totalPages} currentPage={currentPage}/>
    </Container>
};

export default HomeScreen