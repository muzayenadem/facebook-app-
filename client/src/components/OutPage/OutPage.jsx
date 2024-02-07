import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {Box, Stack, TextField, Typography,Card,CardContent, CardActions, Button, Divider} from '@mui/material'
function OutPage() {
  return (
  <Box sx={{
    height:'84vh'
  }}>
    <>
    <Outlet/>
    </>
   <Box sx={{
    width:'100%',
    height:'20vh',
    mb:'0px',
    mt:'6%',
    bgcolor:'white',
    opacity:'0.4'
   }}>
<Box sx={{
    width:'70%',
    ml:'15%',
    pt:5
}}>
<Typography>English (us) Amharic oromic Alsomali porchugal spanish
</Typography>
<Divider/>
<Box sx={{
    display:'flex',
    flexWrap:'wrap',
    pl:2,
    m:2,
    p:'13px'
}}>
     <Typography >Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>     
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
     <Typography sx={{ml:2}}>Singup</Typography>
</Box>
</Box>
   </Box>
  </Box>
  )
}

export default OutPage