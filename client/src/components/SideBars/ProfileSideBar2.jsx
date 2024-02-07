import { Home, Message, NotificationAdd, PortableWifiOff, Settings } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'

function ProfileSideBar2() {
  return (
   <Sidebar style={{
    width:'100%',
    right:'2px',
    marginTop:'50px',
    position:'relative'
   }}>
    <Menu>
        <MenuItem icon={<Home/>}>
            <Typography>Home</Typography>
        </MenuItem>
        <MenuItem icon={<Message/>}>
            <Typography>Message</Typography>
        </MenuItem>
        <MenuItem icon={<NotificationAdd/>}>
            <Typography>Notification</Typography>
        </MenuItem>
        <MenuItem icon={<PortableWifiOff/>}>
            <Typography>Portable</Typography>
        </MenuItem>
        <MenuItem icon={<Settings/>}>
            <Typography>Settings</Typography>
        </MenuItem>
    </Menu>
   </Sidebar>
  )
}

export default ProfileSideBar2