import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
import { useGlobalContext } from './context'

const SidebarOption = ({Icon,title,addChannelOption,id}) => {

    const {dispatch} = useGlobalContext()

    const addChannel = () => {
        const channelName = prompt('Enter the channel name')

        if(channelName){
            db.collection('rooms').add({
                name:channelName,
            })
        }
    }

    const selectChannel = () =>{
        if(id){
            dispatch({type:'ENTER_ROOM',payload:id})
        }
    }

    return (
        <div>
            <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
                {Icon && <Icon font-size='small' style={{padding:'10px'}} />}
                {Icon ? <h3>{title}</h3> : (
                    <SidebarOptionChannel>
                        <span>#</span>{title}
                    </SidebarOptionChannel>
                )}
            </SidebarOptionContainer>
        </div>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
display: flex;
font-size:12px;
align-items: center;
padding-left:2px;
cursor: pointer;

:hover{
    opacity:0.9;
    background-color: #340e36;
}

>h3{
    font-weight:500;
}

>h3 >span{
    padding:15px;
}
`

const SidebarOptionChannel = styled.h3`
padding:10px;
font-weight:700 !important;
`
