//import React from 'react'

import { Explore, LiveTv, ReplyAllSharp, SaveRounded, Settings, Shower, VideoLibrary } from "@mui/icons-material"
import {  Avatar, IconButton, Stack, Typography } from "@mui/material"
import { MenuItem, Sidebar,Menu } from "react-pro-sidebar"
import AppHeader from '../../components/AppHeader'
import { Link, Outlet } from "react-router-dom"
function Video2() {
 
  return (
    <>    
    <AppHeader/>
    <Stack direction={'row'} spacing={{xs:0,sm:10,md:31,lg:31,xl:31,xxl:31}}>
        <Stack display={{xs:'none',sm:'block'}}>
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
        <Stack direction={'row'} ml={2} mt={1} spacing={{xs:0,sm:6,md:12,xl:15}}>
            <Typography   variant='h6'>Videos</Typography>
            <IconButton>
             <Avatar sx={{color:'black'}}><Settings/> </Avatar> 
            </IconButton>
        </Stack>
        <Menu open>
            <MenuItem component={<Link to={'/videos/'}/>}  icon={<VideoLibrary/>}>
            <Typography variant='body2'>Home</Typography>
            </MenuItem>
            <MenuItem component={<Link to={'/videos/live'}/>} icon={< LiveTv/>}>
            <Typography variant='body2' >Live</Typography>
            </MenuItem>
            <MenuItem component={<Link to={'/videos/reels'}/>} icon={<ReplyAllSharp/>}>
            <Typography variant='body2' >Reels</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/videos/shows'}/>} icon={<Shower/>}>
            <Typography variant='body2' >Shows</Typography>
            </MenuItem>
            <MenuItem component={<Link to={'/videos/explore'}/>} icon={<Explore/>}>
            <Typography variant='body2' >Explore</Typography>
            </MenuItem>
            <MenuItem component={<Link to={'/videos/saved'}/>} icon={<SaveRounded/>}>
            <Typography variant='body2' >Saved Videos</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
    </Stack>
        <Stack mt={10}>
            <Outlet/>
        </Stack>
</Stack>


</>
  )
}

export default Video2