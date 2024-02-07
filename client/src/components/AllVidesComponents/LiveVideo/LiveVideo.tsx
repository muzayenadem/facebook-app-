import { Comment, Fingerprint, HeartBroken, Interests, MoreHoriz, People, Share } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, ButtonGroup, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import logo from "../../../pictures/br1.jpg"
import vid from "../../../Videos/new.mp4"
import React, { useEffect, useState } from 'react'
function LiveVideo() {
  // const [user,setUser] =useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:9910')
  //   .then((userfromhere)=>{
  //     setUser(userfromhere.data)
  //   })
  //   .catch((err)=> {
  //     console.log(err.message);
  //   })
  // },[])
  return (
   <>
    <Card sx={{mb:1,mt:3,ml:{xs:'0%',sm:'5%',md:'25%',xl:'30%'}, width:{xs:'580px',sm:'600px',md:'1030px'}}} >
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



<Card sx={{mb:1,mt:3, width:{xs:'600px',sm:'600px',md:'1030px'}}} >

 <Typography variant='h4' sx={{m:1}}>Recent Live Videos</Typography> 
 <CardContent>
  <Box sx={{
    display:'flex',
    flexWrap:'wrap'
  }}>
  {data.map((single)=>{
    return(
      <>
        <Stack direction={'row'} spacing={1}>
  <Card sx={{mb:1, width:{xs:'250px',sm:'280px',md:'330px'}}} >
    <CardContent>
  <CardMedia component={'video'}
                 width={'100%'}
                 height={'100%'}
                 src={vid} 
                 controls
                 alt="no connection"
                 />
                 <Stack direction={'row'} spacing={2} sx={{mt:1.5}}>
                  <Avatar src={logo}></Avatar>
                  <Stack>
                    <Typography variant='body1'>New york, New Arrivals</Typography>
                    <Typography variant='body2'>Apple blvd boultile</Typography>
                    <Stack direction={'row'} spacing={1}>
                      
                        <Interests/>
                        <HeartBroken/>
                      
                      <Typography>430</Typography>
                    </Stack>
                  </Stack>
                 </Stack>
                 </CardContent>
     </Card>
     </Stack>
      </>
    )
  })}
</Box>
 </CardContent>
 <Button fullWidth sx={{bgcolor:'secondary', color:'primary'}}> See more</Button>
</Card>



<Card sx={{mb:1,mt:3,ml:'30%', width:{xs:'600px',sm:'700px',md:'1030px'}}} >

 <Typography variant='h4' sx={{m:1}}> Live Videos for you</Typography> 
 <CardContent>
  <Box sx={{
    display:'flex',
    flexWrap:'wrap'
  }}>
  {data.map((single)=>{
    return(
      <>
        <Stack direction={'row'} spacing={1}>
  <Card sx={{mb:1, width:{xs:'250px',sm:'280px',md:'330px'}}} >
    <CardContent>
  <CardMedia component={'video'}
                 width={'100%'}
                 height={'100%'}
                 src={vid} 
                 controls
                 alt="no connection"
                 />
                 <Stack direction={'row'} spacing={2} sx={{mt:1.5}}>
                  <Avatar src={logo}></Avatar>
                  <Stack>
                    <Typography variant='body1'>New york, New Arrivals</Typography>
                    <Typography variant='body2'>Apple blvd boultile</Typography>
                    <Stack direction={'row'} spacing={1}>
                      
                        <Interests/>
                        <HeartBroken/>
                      
                      <Typography>430</Typography>
                    </Stack>
                  </Stack>
                 </Stack>
                 </CardContent>
     </Card>
     </Stack>
      </>
    )
  })}
</Box>
 </CardContent>
 <Button fullWidth sx={{bgcolor:'secondary', color:'primary'}}> See more</Button>
</Card>

   </>
  )
}

export default LiveVideo
const data = [1,2,3,4,5]