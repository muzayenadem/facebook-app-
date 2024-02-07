import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import imgs from '../../../pictures/br1.jpg'
function Home() {
  return (
<Box sx={{mt:2}}>
  <Stack direction={'row'} spacing={40}>
       <Typography>Friend Request</Typography>
        <Link underline='none'>See All</Link>
  </Stack>
     <Stack direction={'row'} spacing={2} sx={{

        display:'flex',
        flexWrap:'wrap'
    }}>
            {list.map((single)=>{
                return <Stack direction={'row'}>
                <Stack direction={'row'}>
                 <Card sx={{
                    width:'300px',
                    display:'flex',
                    flexWrap:'wrap',
                    mt:6
                 }}>
        <CardContent>
            <CardMedia component='img'
            height='280px'
            width='3000px'

            image={imgs}
            alt="hrtjtrd"
            />
           <Typography variant='h5' sx={{
            textAlign:'left'
           }}>{single.name}</Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth={true} variant='outlined'>Add Friend</Button>
            <Button variant='outlined'>Remove</Button>
        </CardActions>
      </Card>
    </Stack> 
   </Stack>
            })}
  </Stack>
</Box>
  )
}

export default Home
const list=[
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    },
    {
        name:"Muzayen Adem"
    }
]