import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const Navbar = () => {

    const [user] = useAuthState(auth)

    return (
        <NavbarContainer>
            <NavLeft>
                <NavAvatar src={user?.photoURL} alt={user?.diplayName} onClick={()=>auth.signOut()} />
                <ScheduleIcon />
            </NavLeft>

            <NavSearch>
                <SearchIcon />
                <input type='text' placeholder='search.....'></input>
            </NavSearch>

            <NavbarRight>
                <HelpOutlineOutlinedIcon />
            </NavbarRight>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color:white;
`

const NavLeft = styled.div`
flex:0.3;
display: flex;
align-items:center;
margin-left:20px;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;
}
`

const NavAvatar = styled(Avatar)`
cursor:pointer;

:hover{
    opacity:0.8;
}
`

const NavSearch = styled.div`
flex:0.4;
opacity: 1;
border:solid 1px #f7f7f7;
border-radius: 5px;
background-color: #421f44;
display:flex;
padding: 2px 50px;

>input{
    outline: none;
    background-color:transparent;
    border:none;
    min-width:30vw;
    text-align:center;
    color:white;
}
`

const NavbarRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;

> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}
`