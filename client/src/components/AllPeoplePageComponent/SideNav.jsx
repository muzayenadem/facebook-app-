//import React from 'react'
import {   LinkedIn, People, PeopleAlt,  Settings, SettingsSuggest} from '@mui/icons-material'
import { Typography, Stack, IconButton, Avatar } from '@mui/material'
//import { Query } from 'mongoose'
import {Sidebar,Menu, MenuItem} from 'react-pro-sidebar'
import eventComponent from '../../EventEmittter/EventComponent'
import './style.css'
function SideNav() {

const homeClicker = () =>{
 const result1 = {
    isFrom:'friendsHome',
 } 
 eventComponent.emit('FriendsComponentReturn',result1)
}

const requestFriendClicker = () =>{
    const result1 = {
       isFrom:'friendsRequest',
    } 
    eventComponent.emit('FriendsComponentReturn',result1)
   }
const allFriendsClicker = () =>{
    const result1 = {
        isFrom:'friendsAllFriends',   
    } 
    eventComponent.emit('FriendsComponentReturn',result1)
   }
   
   const suggestionClicker = () =>{
    const result1 = {
        isFrom:'friendsSuggestion',
    } 
    eventComponent.emit('FriendsComponentReturn',result1)
   }
   const birthdayClicker = () =>{
    const result1 = {
       isFrom:'friendsBirthday',
    } 
    eventComponent.emit('FriendsComponentReturn',result1)
   }
   const customListClicker  = () =>{
    const result1 = {
       isFrom:'friendsCustomList',
    } 
    eventComponent.emit('FriendsComponentReturn',result1)
   }
         


   

  return (
    

    <Sidebar
    className='da'
    style={{
        height: '100%',
        top:'auto',
        position:'fixed',
      }}
     // breakPoint='all'
     backgroundColor={'white'}
    
    >
        <Stack direction={'row'} spacing={12} mt={2} ml={3}>
            <Typography sx={style.friends} variant='h6'>Friends</Typography>
            <IconButton>
            <Avatar sx={{color:'black'}}><Settings/></Avatar> 
            </IconButton>
        </Stack>
        <Menu open>
            <MenuItem onClick={homeClicker} icon={<People/>}>
            <Typography variant='body2'>Home</Typography>
            </MenuItem>
            <MenuItem onClick={requestFriendClicker} icon={<PeopleAlt/>}>
            <Typography variant='body2' >Friends Request</Typography>
            </MenuItem>
            <MenuItem onClick={suggestionClicker} icon={<SettingsSuggest/>}>
            <Typography variant='body2' >Suggestion</Typography>
            </MenuItem>
            <MenuItem onClick={allFriendsClicker} icon={<PeopleAlt/>}>
            <Typography variant='body2' >All Friends</Typography>
            </MenuItem>
            <MenuItem onClick={birthdayClicker} icon={<LinkedIn/>}>
            <Typography variant='body2' >Birthdays</Typography>
            </MenuItem>
            <MenuItem icon={<LinkedIn/>}>
            <Typography onClick={customListClicker} variant='body2' >Custom Lists</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
  )
}

export default SideNav
/** @type {import('@mui/material').SxProps} */
const style ={
    friends:{
        fontWeight:1000,
        ml:10,
        mt:10
    }
}