import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Container from '../../components/Container/Container'
import ImageBlock from '../../components/ImageBlock/ImageBlock'
import Loader from '../../components/Loader/Loader'
import {getUserLikes} from '../../shared/actions/userActions'
import {CenterLoading, Title} from './UserScreen.styles'

const UserScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const {likes, loading} = useSelector(state => state.userLikes)

    useEffect(() => {
        if (!userProfile?.firstName) {
            navigate('/')
        }

        dispatch(getUserLikes())
    }, [])

    return <Container>
        <Title>Liked images</Title>
        {loading
            ? <CenterLoading><Loader/></CenterLoading>
            : likes.map(e => <ImageBlock key={e.id} item={e}/>)}
    </Container>;
};

export default UserScreen