//import React from 'react'

import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Stack, Typography} from "@mui/material"
import logo from '../../pictures/br1.jpg'
import { Female, LiveTv, Photo } from "@mui/icons-material"
function SearchMind() {
  return (
   <Card sx={{mt:4}}>
     <CardContent>
        <Stack direction={'row'} spacing={4}  >
            <Avatar src={logo}/> 
            <input placeholder="what's on your mind" style={{marginBottom:'8px',border:'none', color:'black', backgroundColor:'#b2aaaaf2', width:'80%',padding:'6px 10px',borderRadius:'30px'}}/>           
         </Stack>
         <Box sx={{borderBottom:2, mt:1, borderColor:'divider'}}/>
        <Stack direction={'row'} >
            <ButtonGroup fullWidth>
        <Button variant="text" startIcon={<LiveTv color="error"/>} ><Typography variant="body1" display={{xs:'none',sm:'block'}}>Live Video</Typography></Button>
        <Button variant="text" startIcon={<Photo color="success"/>}><Typography variant="body1" display={{xs:'none',sm:'block'}}>PHOTO/VIDEO</Typography></Button>
        <Button variant="text" startIcon={<Female color="warning"/>}><Typography variant="body1" display={{xs:'none',sm:'block'}}>FEELING/ACTIVITY</Typography></Button>
        </ButtonGroup>
        </Stack>
     </CardContent>
   </Card>
  )
}

export default SearchMind