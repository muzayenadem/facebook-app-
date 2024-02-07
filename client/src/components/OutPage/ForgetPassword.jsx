import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function ForgetPassword() {
  return (
  <Box sx={{
    width:'600px',
    ml:'30%',
    mt:'10%'
  }}>
 <Card >
        <Typography sx={{m:2}} variant='h4'>Find your accoun</Typography>
        <Divider/>
    <CardContent> 
    <Typography variant='body1'>
        Please enter your email or phone number to search for your account
    </Typography>
        <TextField fullWidth placeholder='your phone number , or email'/>
        </CardContent>
    <CardActions>
    <Divider sx={{mt:2,mb:2}}/>
<Box sx={{pr:2,display:'flex',justifyContent:'space-between',width:'100%'}}>
    <Stack>
       
    </Stack>
    <Stack direction={'row'} spacing={2}>
        <Button color='inherit'> <Link to={'/outpage/login'} style={{
            textDecorationColor:'black',
            textDecorationLine:'none'
        }}>Cancel</Link></Button>
        <Button variant='contained'>Search</Button>
    </Stack>
</Box>
    </CardActions>
 </Card>
  </Box>
  )
}

export default ForgetPassword