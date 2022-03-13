import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {search} from '../shared/actions/searchActions'
import Container from '../components/Container/Container'
import Paginate from '../components/Paginate/Paginate'
import ImageBlock from '../components/ImageBlock/ImageBlock'
import {InputBlock, ResultsBlock} from './HomeScreen.styles'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message';

const HomeScreen = () => {

    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState('alp')
    const currentPage = 1

    const searchReducer = useSelector(state => state.search)
    const {loading, items, totalPages, error, success} = searchReducer

    const keyDownHandler = (event) => {
        if (event.keyCode === 13) {
            dispatch(search(searchQuery))
        }
    }

    const changeHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    return <Container>
        <InputBlock>
            <input type="text" placeholder={'search here ...'} value={searchQuery} onChange={changeHandler}
                   onKeyDown={keyDownHandler}/>
        </InputBlock>
        <ResultsBlock>
            {loading && <Loader />}
            {error && <Message error>{error}</Message>}
            {items.length > 0
                ? items.map((element) => (
                    <ImageBlock key={element.id} item={element}/>
                ))
                : !loading && success
                    ? <Message>nothing found :(</Message>
                    : <Message>try to search something...</Message>
            }
        </ResultsBlock>
        <Paginate totalPages={totalPages} currentPage={currentPage}/>
    </Container>
};

export default HomeScreen