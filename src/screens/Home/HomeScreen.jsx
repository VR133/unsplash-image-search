import React from 'react'
import {useSelector} from 'react-redux'
import Container from '../../components/Container/Container'
import Paginate from '../../components/Paginate/Paginate'
import SearchInput from './components/SearchInput/SearchInput'
import ResultsBlock from './components/ResultsBlock/ResultsBlock'

const HomeScreen = () => {
    const locationSearchParams = new URLSearchParams(window.location.search)
    const currentPage = Number(locationSearchParams.get('page') || 1)

    const searchReducer = useSelector(state => state.search)
    const {totalPages} = searchReducer

    return <Container>
        <SearchInput />
        <ResultsBlock />
        <Paginate totalPages={totalPages} currentPage={currentPage}/>
    </Container>
};

export default HomeScreen