import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from 'react-firebase-hooks/firestore'
import {db,auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Sidebar = () => {

    const [channels,loading,error] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth)

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Onlynavv</h2>
                    <h3><FiberManualRecordIcon />{user.displayName}</h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title='Thread' />
            <SidebarOption Icon={InboxIcon} title='Mentions & Reaction' />
            <SidebarOption Icon={DraftsIcon} title='Saved Items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & User Groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File Browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show Less' />
            
            <hr></hr>

            <SidebarOption Icon={ExpandMoreIcon} title='Channels'></SidebarOption>

            <hr></hr>

            <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel'></SidebarOption>
            {channels?.docs.map((doc)=>{
               return (
                    <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
               ) 
            })}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: var(--slack-color);
color:white;
flex:0.3;
max-width:260px;
margin-top:60px;
overflow-y: scroll;

::-webkit-scrollbar{
    display: none;
}

>hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid 1px #49274b;
}
`

const SidebarHeader = styled.div`
display:flex;
padding:12px;
border-bottom:solid 1px #49274b;
justify-content:space-evenly;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:5px;
    background: white;
    color:var(--slack-color);
    border-radius:50%;
    padding:8px;
    border:solid 1px white;
    font-size:18px;
}
`

const SidebarInfo = styled.div`
display: flex;
justify-content:space-evenly;
flex-direction: column;
flex:1;

>h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
}

>h3{
    display: flex;
    align-items:center;
    font-size:13px;
    font-weight:400;
}

>h3 .MuiSvgIcon-root{
    font-size: 14px;
    color:green;
    margin-top:2px;
    margin-right:2px;
}

`
