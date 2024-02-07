import { LinkedIn, People, PeopleAlt, Settings, SettingsSuggest } from '@mui/icons-material'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import AppHeader from '../../components/AppHeader'
import { Link, Outlet } from "react-router-dom"
function PeoplePage2() {
 
  return (
    <>  
    <AppHeader/>
    <Stack direction={'row'} spacing={40}>
        <Stack>
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
            <Typography   variant='h6'>Videos</Typography>
            <IconButton>
             <Avatar sx={{color:'black'}}><Settings/> </Avatar> 
            </IconButton>
        </Stack>
        <Menu>
            <MenuItem  component={<Link to={'/people/'}/>} icon={<People/>}>
            <Typography variant='body2'>Home</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/people/friendrequest'}/>} icon={<PeopleAlt/>}>
            <Typography variant='body2' >Friends Request</Typography>
            </MenuItem>
            <MenuItem   component={<Link to={'/people/suggestionfriend'}/>}icon={<SettingsSuggest/>}>
            <Typography variant='body2' >Suggestion</Typography>
            </MenuItem>
            <MenuItem   component={<Link to={'/people/allfriends'}/>} icon={<PeopleAlt/>}>
            <Typography variant='body2' >All Friends</Typography>
            </MenuItem>
            <MenuItem   component={<Link to={'/people/birthday'}/>}icon={<LinkedIn/>}>
            <Typography variant='body2' >Birthdays</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/people/customlist'}/>} icon={<LinkedIn/>}>
            <Typography variant='body2' >Custom Lists</Typography>
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

export default PeoplePage2