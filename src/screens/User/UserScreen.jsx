import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Container from '../../components/Container/Container'
import {Title} from './UserScreen.styles'
import {getUserLikes} from '../../shared/actions/userActions';
import ImageBlock from '../../components/ImageBlock/ImageBlock';

const UserScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userProfile = useSelector(state => state.userProfile)
    const {likes} = useSelector(state => state.userLikes)

    useEffect(() => {
        if (!userProfile?.firstName) {
            navigate('/')
        }

        dispatch(getUserLikes())
    }, [])

    return <Container>
        <Title>Liked images</Title>
        {likes.map(e => <ImageBlock key={e.id} item={e}/>)}
    </Container>;
};

export default UserScreen