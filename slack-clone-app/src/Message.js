import React from 'react'
import styled from 'styled-components'

const Message = ({message,user,timestamp,userImage}) => {
    return (
        <MessageContainer>
            <img src={userImage} alt={user}></img>
            <MessageInfo>
                <h4>{user}<span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
display:flex;
align-items:center;
padding:20px;
padding-bottom:15px;

>img{
    height:50px;
    border-radius: 50%;
}
`

const MessageInfo = styled.div`
padding-left:10px;

>h4 >span {
    color:gray;
    margin-left:5px;
    font-weight:500;
    font-size:12px
}
`
