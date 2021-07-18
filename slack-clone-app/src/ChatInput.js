import React,{useState} from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import firebase from 'firebase'
import {db,auth} from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatInput = ({channelId,channelName,chatRef}) => {

    const [message,setMessage] = useState('')
    const [user] = useAuthState(auth)

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId){
            return false
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message:message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL
        })

        chatRef.current.scrollIntoView({
            behavior:'smooth'
        })

        setMessage('')
    }

    return (
        <ChatInputContainer>
            <form>
                <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder={`Message #${channelName}`}></input>
                <Button type='submit' onClick={sendMessage}>Send</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;

>form{
    position: relative;
    display:flex;
    justify-content: center;
}

>form >input{
    outline:none;
    position: fixed;
    bottom: 20px;
    width:70%;
    border:solid 1px gray;
    border-radius:3px;
    padding: 10px;
}

>form >button{
    display:none;
}
`