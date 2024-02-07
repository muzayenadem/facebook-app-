import { Box, Typography,Avatar} from '@mui/material'
import {Sidebar,Menu,MenuItem,useProSidebar} from 'react-pro-sidebar'
import  DashboardOutlined  from '@mui/icons-material/DashboardOutlined'
import  AnalyticsRounded  from '@mui/icons-material/AnalyticsRounded'
import  StyleOutlined  from '@mui/icons-material/StyleOutlined'
import  SourceOutlined  from '@mui/icons-material/SourceOutlined'
//import { useTheme } from '@emotion/react'
import logo from '../../pictures/br1.jpg'
//import React from 'react'


function ProfileSideBar() {
 // const location = useLocation()
  const {collapsed} = useProSidebar()
 // const theme = useTheme()
  return(
  <Sidebar style={{
    height: '100%',
    top:'auto'
  }}
  breakPoint='all'
 backgroundColor={'green'}

 >
    <Box sx={style.avaterContainer}>
      <Avatar sx={style.avater} src={logo} alt='channel name'></Avatar>
    <Typography variant='body1' sx={style.yourChannel}> your channel</Typography>
    <Typography variant='overline' > React with muzayen adem</Typography>
    
    </Box>
    <Menu 
    menuItemStyles={{
      button : (active) =>{
        return {
          backgroundColor: active ? 'red' : undefined 
        }
      },
    }}>
      <MenuItem  icon={<DashboardOutlined/>} >
        <Typography   variant='body2'>Dashboard</Typography>
      </MenuItem>
       <MenuItem icon={<StyleOutlined/>} >
        <Typography variant='body2'>Content</Typography>
      </MenuItem>
       <MenuItem icon={<SourceOutlined/>} >
        <Typography variant='body2'>Analytics</Typography>
      </MenuItem>
       <MenuItem  icon={<AnalyticsRounded/>} >
        <Typography variant='body2'>Customaization</Typography>
      </MenuItem>
    </Menu>
  </Sidebar>
  )
}
/**@type {import("@mui/material").SxProps} */
 const style ={
  avaterContainer:{
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    my:5
  },
  avater:{
    width:'4',
    height:'auto'
  },
  yourChannel:{
    mt: 1
  }
 }

export default ProfileSideBar