import React from 'react'
import {useSelector} from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import Message from '../../../../components/Message/Message'
import ImageBlock from '../../../../components/ImageBlock/ImageBlock'
import {Results} from './ResultsBlock.styles'

const ResultsBlock = () => {
    const searchReducer = useSelector(state => state.search)
    const {loading, items, error, success} = searchReducer

    return  <Results>
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
    </Results>
};

export default ResultsBlock