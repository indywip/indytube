import React from 'react'
import styled from 'styled-components'

import Comment from './Comment'

const Container = styled.div`
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({theme})=>theme.soft};
    outline: none;
    color: ${({ theme }) => theme.text};
    padding: 5px;
    width: 100%;
`

const Comments = ({src}) => {
    return (
        <Container> 
           <NewComment>
                <Avatar src={src} />
                <Input placeholder="Add a comment..." />
            </NewComment> 
            <Comment />
        </Container>
    )
}

export default Comments