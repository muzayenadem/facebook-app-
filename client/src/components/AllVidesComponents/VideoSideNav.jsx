//import React from 'react'
import {   Explore, LiveTv,   ReplyAllSharp,  SaveRounded,  Settings,  Shower, VideoLibrary} from '@mui/icons-material'
import { Typography, Stack, IconButton, Avatar } from '@mui/material'
//import { Query } from 'mongoose'
import {Sidebar,Menu, MenuItem} from 'react-pro-sidebar'
import eventComponent from '../../EventEmittter/EventComponent'
import '../AllPeoplePageComponent/style.css'
function VideoSideNav() {

const homeClicker = () =>{
 const result1 = {
    isFrom:'videoHome',
 } 
 eventComponent.emit('VideoComponentsReturn',result1)
}

const liveClicker = () =>{
    const result1 = {
       isFrom:'videoLive',
    } 
    eventComponent.emit('VideoComponentsReturn',result1)
   }
   
const reelsClicker = () =>{
    const result1 = {
       isFrom:'videoReels',
    } 
    eventComponent.emit('VideoComponentsReturn',result1)
   }

const showsClicker = () =>{
    const result1 = {
       isFrom:'videoShows',
    } 
    eventComponent.emit('VideoComponentsReturn',result1)
   }

const exploreClicker = () =>{
    const result1 = {
       isFrom:'videoExplore',
    } 
    eventComponent.emit('VideoComponentsReturn',result1)
   } 
   
const savedClicker = () =>{
    const result1 = {
       isFrom:'videoSaved',
    } 
    eventComponent.emit('VideoComponentsReturn',result1)
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
        <Stack direction={'row'} ml={2} mt={1} spacing={15}>
            <Typography  sx={style.friends} variant='h6'>Videos</Typography>
            <IconButton>
             <Avatar sx={{color:'black'}}><Settings/> </Avatar> 
            </IconButton>
        </Stack>
        <Menu open>
            <MenuItem onClick={homeClicker} icon={<VideoLibrary/>}>
            <Typography variant='body2'>Home</Typography>
            </MenuItem>
            <MenuItem onClick={liveClicker} icon={< LiveTv/>}>
            <Typography variant='body2' >Live</Typography>
            </MenuItem>
            <MenuItem  onClick={reelsClicker} icon={<ReplyAllSharp/>}>
            <Typography variant='body2' >Reels</Typography>
            </MenuItem>
            <MenuItem  onClick={showsClicker} icon={<Shower/>}>
            <Typography variant='body2' >Shows</Typography>
            </MenuItem>
            <MenuItem onClick={exploreClicker} icon={<Explore/>}>
            <Typography variant='body2' >Explore</Typography>
            </MenuItem>
            <MenuItem onClick={savedClicker} icon={<SaveRounded/>}>
            <Typography variant='body2' >Saved Videos</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
  )
}

export default VideoSideNav
/** @type {import('@mui/material').SxProps} */
const style ={
    friends:{
        fontWeight:1000,
        ml:10,
        mt:10
    }
}