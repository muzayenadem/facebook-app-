import { Add, MoreHoriz, Search, Settings } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, Dialog, DialogContent, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Menu, MenuItem, Sidebar,} from 'react-pro-sidebar'
import logo from '../../pictures/br1.jpg'
import ContactsDialog from '../Dialogs/ContactsDialog/ContactsDialog'
import ContactEventEmitter from '../../EventEmittter/ContactEventEmitter'
import './PeoppleYouMayKnow.css'
import axios from 'axios'
function HomeSideba() {
    const [userMessage,setUserMessage] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:9910/users')
        .then((data)=>{
            setUserMessage(data.data)
            console.log('succed');
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
    
    const sendingRUserData = (single:any) => {
        const ll = {
            isFrom:'CONTACT',
            data:single
        }
        ContactEventEmitter.emit('RETURN',ll)
    }
 return(
    <>
    <Sidebar style={{
        right:6,
        top:60,
        bottom:-64,
        width:'260px',
        backgroundColor:'grey',
        position:'fixed'
    }}>
        <Stack direction={'row'} mt={4} spacing={3}>
         <Box component={'img'} src={logo} sx={{
            width:'140px',
            height:'90px'
         }} />
         <Stack>
            <Typography variant='h6'>Get your free API Key Now!!!</Typography>
            <Typography variant='body2'>ipstack.com </Typography>
         </Stack>
        </Stack>
        <Stack direction={'row'} mt={1} spacing={3}>
         <Box component={'img'} src={logo} sx={{
            width:'140px',
            height:'60px'
         }} />
         <Stack>
            <Typography variant='h6'>Get your free API Key Now!!!</Typography>
            <Typography variant='body2'>ipstack.com </Typography>
         </Stack>
        </Stack>
        <Divider sx={
            {
                mt:2,
                mb:2
            }
        }/>
        <Stack direction={'row'} spacing={10}>
            <Typography variant='h6' sx={{fontWeight:500}}>Contacts</Typography>
            <Stack spacing={3} direction={"row"}>
                <Search/>
                <MoreHoriz/>
            </Stack>
        </Stack>
        <Menu>
          {
            userMessage.map((single,index)=>{
                return<div key={index}>
                <MenuItem onClick={()=>sendingRUserData(single)} icon={<Avatar src={logo}/>}>
                    <Typography variant='body2'>{single.firstName} {single.lastName}</Typography>
                    
                </MenuItem>
                </div>
            })
           } 
      

        </Menu>
        <Divider sx={
            {
                mt:2,
                mb:2
            }
        }/>
        <Stack mt={2} mb={8}>
        <Typography>Group Conversations</Typography> 
        <Button variant='text' sx={{
            color:'black'
        }} startIcon={<Add/>}>Create new group</Button>   
        </Stack> 
    </Sidebar>
    <ContactsDialog/>
    </>
 )
}

export default HomeSideba
