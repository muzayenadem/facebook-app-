import { Avatar, Box, Button, ButtonGroup, ButtonGroupButtonContext, Card, CardContent, CardMedia, Divider, InputAdornment, Stack, TextField, Typography, duration } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../../../pictures/br1.jpg"
import axios from 'axios'
import vid from "../../../Videos/new.mp4"
import { Link, Outlet } from 'react-router-dom'
import eventComponent from '../../../EventEmittter/EventComponent'
import { Clear, Comment, Fingerprint, Interests, Message, MoreHoriz, People, Share } from '@mui/icons-material'
function VideoHome() {
  const  [videos,setVideos]= useState([])
  const [assure, setAssure] = useState(false)
  useEffect(()=>{
    axios.get('http://localhost:9910/videos')
    .then((data)=>{
      setVideos(data.data)
      sendData(data.data[0])
    })
    .catch((err)=>{
      console.log(err.message);
    })
  },[])
  const sendData = (singleData) =>{

    eventComponent.emit('DataFromData',singleData)
    setAssure(true)
  }
  return (

data.map((single)=>{
  return(
      <>
    <Card sx={{mb:1,mt:3,ml:'30%', width:{xs:'560px',sm:'600px',md:'900px'}}} >
<Box sx={{
      display:'flex',
      flexWrap:'none',
      justifyContent:'space-between',
      margin:2
    }} >
      <Stack direction={'row'} spacing={2}>
       <Stack>
       <Avatar src={logo}/>
       </Stack>
     <Stack direction={'column'}>
      <Typography variant='h6'>Muzayen Adem</Typography>
      <Stack direction={'row'} spacing={1}>
        <Typography variant='body2'>3d</Typography>
        <People/>
      </Stack>
     </Stack>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <MoreHoriz/>   
      </Stack>
    </Box>
  <CardContent>
   <CardMedia component={'video'}
                 width={'100%'}
                 height={'100%'}
                 src={vid} 
                 controls
                 alt="no connection"
                 />
                  <Box sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  marginTop:1
                 }}>
                  <Stack direction={'row'} spacing={2}>

                   <ButtonGroup variant=''>
                    <Button startIcon={<Fingerprint/>}>Like</Button>
                    <Button startIcon={<Comment/>}>Comment</Button>
                    <Button startIcon={<Share/>}>Share</Button>
                   </ButtonGroup>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <Typography>Muzi ye adem lij and 8494 others</Typography>
                    <Typography> 789 comment</Typography>
                    <Typography> 389k views</Typography>
                  </Stack>
                 </Box>
  </CardContent>
</Card>
      </>
    )
  })
)
}

export default VideoHome
let data = [1,2,3,4,5]