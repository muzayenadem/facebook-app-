import React, { useEffect } from 'react'
import { Avatar, Box, Button, ButtonGroup, ButtonGroupButtonContext, Card, CardContent, CardHeader, CardMedia, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import logo from '../../pictures/br1.jpg'
import './PeoppleYouMayKnow.css'
import { Camera, CatchingPokemon, CircleNotifications, Clear, EmojiEvents, Interests, Login, Message, MoreHoriz, People, PersonPin, SatelliteAlt, Share } from "@mui/icons-material"
import { grey } from '@mui/material/colors'
import {fetchUsersList } from '../../Feutures/allUsersSlice'
import { UseSelector,useDispatch, useSelector } from 'react-redux'

function PicturePost() {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchUsersList())
},[])
const allUsers = useSelector((state)=> state.allUsersList)
  return (
    <>
   
    <Card sx={{mb:1, width:{xs:'550px',sm:'550px',md:'550px'}}} >
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
            <Clear/>            
          </Stack>
        </Box>
    <CardContent>
    <CardMedia component={'img'}
                    width={'100%'}
                    height={'100%'}
                    image={logo}
                    alt="no connection"
                    />
             <Stack>
              <Stack direction={'row'} spacing={1}>
                <Interests color='primary'/>
                <Typography>Usman affaan and 23 others</Typography>
              </Stack>
              <Box sx={{
                padding:2
              }}>
              <Divider/>
              <ButtonGroup variant='t' fullWidth>
                  <Button startIcon={<Interests/>}>Like</Button>
                    <Button startIcon={<Message/>}>Comment</Button>
                    <Button startIcon={<Share/>}>Share</Button>
              </ButtonGroup>
              <Divider/>
              </Box>
              <Typography variant='body2'> view more comments</Typography>
              <Stack sx={{
                margin:2
              }} direction={'row'} spacing={1}>
                <Avatar src={logo}/>
                <Stack direction={'column'}>
                <Box sx={{
                   backgroundColor:'rgba(207, 201, 201, 0.619)',
                  padding:'4px 10px',
                  borderRadius:'10px',
                }}>
                  <Typography> this is the comment that from onather user</Typography>
                </Box>
                <Stack direction={'row'} spacing={1}>
                  <Typography variant='body2'>3d</Typography>
                  <Typography variant='body2'>Like</Typography>
                  <Typography variant='body2'>Reply</Typography>
                  <Typography variant='body2'>Share</Typography>  
                </Stack>
                </Stack>
              </Stack>
              <Stack direction={'row'} spacing={1}>
                <Avatar src={logo}></Avatar>
                <TextField variant='outlined' size='small' placeholder='write comment' aria-placeholder='write comment' sx={style.textField} InputProps={{
            endAdornment:<InputAdornment position="end"><Stack spacing={0.2} direction={'row'}><Message/> <EmojiEvents/> <Camera/><CircleNotifications/><CatchingPokemon/></Stack></InputAdornment>
        }}
        />          
              </Stack> 
              
              </Stack>       
     </CardContent>
</Card>
<ul>
  {
    allUsers.list.map((data)=>{
      return <li key={data._id}>{data.firstName}</li>
    })
  }
</ul>
</>
  )
}

export default PicturePost
/** @type {import('@mui/material').SxProps} */
const style={
  textField:{
    display:'flex',
    borderRadius:'70px',
    width:'100%',
    [`& fieldset`]:{
      borderRadius:30,
      borderColor:'none'
    }
  }
}