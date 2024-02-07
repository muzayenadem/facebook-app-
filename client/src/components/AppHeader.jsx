import { AppBar,Toolbar,Box,Typography,Tabs, Tab, Avatar,Stack,Link, IconButton } from "@mui/material"
//import Setting from '@mui/icons-material/Settings'
//import Settings from "@mui/icons-material/Settings"
import photo from '../pictures/br1.jpg'
//import { Menu  } from "@mui/icons-material";
import {Add, Apps, Facebook, Home, Menu, Message, Notifications, PeopleAlt,  Storefront, VideoLibrary} from '@mui/icons-material'
import { Search } from "@mui/icons-material"
import { useEffect, useState } from "react"


import { fetchProfile } from "../Feutures/profileSlice"
import { fetchToken } from '.././Feutures/loggedInAuthSlice'
import { useDispatch, useSelector } from "react-redux"

import TabPannel from "./TabPannel"
import HomeComponent from "../containers/Home/Home"
// import ProfileSideBar2 from "./SideBars/ProfileSideBar2"
import eventComponent from "../EventEmittter/EventComponent"
import PeoplePage from "../containers/PeoplePage/PeoplePage"
import Video from "../containers/Videos/Video"
import MarketPlace from '../containers/MarketPlace/MarketPlace'
import { useLocation } from "react-router-dom"

function AppHeader() {
  const location = useLocation()
  const [value, setValue] = useState(0)
  const changeHandler = (event, newValue) =>{
    setValue(newValue)
  }

// dispatching
const userProfile = useSelector((state)=> state.profile)
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchProfile())
},[])
const {firstName,lastName,_id,emailOrPhone} = userProfile.profile
// token dispaching


useEffect(()=>{
 
  dispatch(fetchToken())
},[])
const token = useSelector((state)=> state.token.token)


  // event emitter
  const messenger = ()=>{
    const result = {
      isTrue : true,
      isFrom:'messenger'
    }
    eventComponent.emit('returnMessenger',result)
  }
  const account = ()=>{
    const result = {
      isTrue : true,
      isFrom:'account',
      isData:'Muzayen Adem'
    }
    eventComponent.emit('returnAccount',result)
  }
  const message = ()=>{
    const result = {
      isTrue : true,
      isFrom:'message'
    }
    eventComponent.emit('returnMessage',result)
  }
  const notification = ()=>{
    const result = {
      isTrue : true,
      isFrom:'notification'
    }
    eventComponent.emit('returnNotification',result)
  }
  const createContent = ()=>{
    const result = {
      isTrue : true,
      isFrom:'createContent'
    }
    eventComponent.emit('returnCreateContent',result)
  }
  const searchHome = ()=>{
    const result = {
      isTrue : true,
      isFrom:'searchHome'
    }
    eventComponent.emit('returnSearchHome',result)
  }
  return (
    <>
    
    <AppBar sx={style.appBar}>
        <Toolbar>
          <Stack spacing={{xs:3,ms:4,md:20}} direction={'row'} sx={{mt:4,display:{xs:'inline',sm:'inline',md:'flex',justifyContent:'space-between'},flexDirection:{xs:'column', sm:'column',md:'row'}}}>
           <Stack width={50}>
            <Stack display={'flex'} direction={'row'} spacing={10} sx={style.logo2}>
             <Box sx={style.icons}>
              <Facebook sx={style.logo2}/>
             <Avatar onClick={searchHome} sx={style.searchIcon}><Search /></Avatar>
             </Box> 
            </Stack>
          <Stack direction={'row'} spacing={{xs:20,sm:30,md:70,lg:80}} sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography sx={style.logo} >Facebook {firstName}</Typography>
              <Stack sx={style.inputBox}>
                <Stack direction={'row'} spacing={3} >
              <Avatar onClick={searchHome} sx={style.searchIconii}><Search /></Avatar>
              <Avatar onClick={messenger} sx={style.searchIconii}><Menu /></Avatar>
              </Stack>
              </Stack>
            </Stack>
         </Stack>
           {/*BTRRR */}
          <Stack direction={'row'} spacing={{xs:10,sm:2,md:15,xl:40,xxl:60}} width={70}>
            <Box>
            {/* <Tabs variant='fullWidth' value={value} onChange={changeHandler}>
              <Tab sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} label={<Home onClick={()=>window.location='http://localhost:5173/home'}/>} id="tab-1"/>
              <Tab sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} label={<PeopleAlt onClick={()=>window.location='http://localhost:5173/people'}/>} id="tab-2"/>
              <Tab sx={{display:{xs:'block',sm:'none'},minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} label={<Message/>} id="tab-3"/>
              <Tab sx={{minWidth:{xs:'60px',width:'60px'}}} label={<VideoLibrary onClick={()=>window.location='http://localhost:5173/videos'}/>} id="tab-4"/>
              <Tab sx={{display:{md:'none'},minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} label={<Notifications/>} id="tab-5"/>
              <Tab sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}}  label={<Storefront onClick={()=>window.location='http://localhost:5173/market'}/>} id="tab-6"/>  
              <Tab sx={{display:{xs:'none',sm:'block'},minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} label={<Menu/>} id="tab-7"/> 
            </Tabs> */}
            <Stack direction={'row'} spacing={4}>
            <IconButton  sx={{minWidth:{xs:'30px',md:'60px'},width:{xs:'30px',md:'60px'},minHeight:{xs:'30px',md:'60px'},height:{xs:'30px',md:'60px'}}} onClick={()=>window.location=`http://localhost:5173/home/${emailOrPhone}`}>
              <Home/>
            </IconButton>
            <IconButton sx={{minWidth:{xs:'30px',md:'60px'},width:{xs:'30px',md:'60px'},minHeight:{xs:'30px',md:'60px'},height:{xs:'30px',md:'60px'}}} onClick={()=>window.location='http://localhost:5173/people'}>
              <PeopleAlt/>
            </IconButton>
            <IconButton sx={{minWidth:{xs:'30px',md:'60px'},width:{xs:'30px',md:'60px'},minHeight:{xs:'30px',md:'60px'},height:{xs:'30px',md:'60px'}}} onClick={()=>window.location='http://localhost:5173/home'}>
              <Message/>
            </IconButton>
            <IconButton sx={{minWidth:{xs:'30px',md:'60px'},width:{xs:'30px',md:'60px'},minHeight:{xs:'30px',md:'60px'},height:{xs:'30px',md:'60px'}}} onClick={()=>window.location='http://localhost:5173/videos'}>
              <VideoLibrary/>
            </IconButton>
            <IconButton sx={{minWidth:{xs:'30px',md:'60px'},width:{xs:'30px',md:'60px'},minHeight:{xs:'30px',md:'60px'},height:{xs:'30px',md:'60px'}}} onClick={()=>window.location='http://localhost:5173/market'}>
              <Storefront/>
            </IconButton>
            </Stack>
            </Box>
            {/* <Box sx={{flexGrow:6}}/> */}
            <Box sx={style.sidebarIcon}>
            <Stack  direction={'row'} spacing={6}>
              <Avatar sx={{color:'black'}} onClick={createContent}><Apps /></Avatar>
              <Avatar sx={{color:'black'}}  onClick={message}><Message/></Avatar>
              <Avatar sx={{color:'black'}}  onClick={notification}><Notifications/></Avatar>
           { token === true && <Avatar sx={{color:'black'}}  onClick={account} src={photo}/>}
              </Stack>
              </Box>
              </Stack>
            </Stack>
        </Toolbar>
    </AppBar>
 
    <Box sx={{mt:{xs:15,sm:15,md:10,xl:8}}}>
      {/* <TabPannel value={value} index={0}>
        <HomeComponent/>
     
      </TabPannel>
    <TabPannel value={value} index={1}>
      <PeoplePage/>
    </TabPannel>
    <TabPannel value={value} index={2}>
      <Typography variant="h2">
        page Message
      </Typography>
    </TabPannel>
    <TabPannel value={value} index={3}>
      <Video/>
    </TabPannel>
    <TabPannel value={value} index={4}>
      <Typography variant="h2">
        page Notification
      </Typography>
    </TabPannel>
    <TabPannel value={value} index={5}>
      <MarketPlace/>    
    </TabPannel>
    <TabPannel value={value} index={6}>
    <Typography variant="h2">
        page Menu
      </Typography>
    </TabPannel> */}
    </Box>
    </>
  )
}

export default AppHeader


/** @type {import('@mui/material').SxProps} */
const style = {
    appBar:{
        bgcolor:'white',
        color:'red',
    },
    logo:{
        color:'#0043c0',
        fontSize:'1.rem',
        fontWeight:1000,
        display:{xs:'block',sm:'none'}
    },
    logo2:{
      color:'#0043c0',
      fontSize:'2rem',
      fontWeight:1000,
      display:{xs:'none',sm:'block'},
      alignItems:'center',
      textAlign:'center'
    },
    icons:{
    display:'flex'
    },
    searchBar:{
    border:'1px solid',
    display:{xs:'none',sm:'block'}
    },
    tabs:{
      '&:hover':{
        color:'red',
        textDecoration:'none',
        fontSize:'6px',
        minHeight:'20px',
        minWidth:'20px',
        ml:1,
        pl:1,
        position:'static',
        "& .MuiTabs-indicater":{backgroundColor:'red'}
      },
    //  display:{xs:'none',md:'block'}
    },
    inputBox:{
      display:{xs:'block',sm:'none'},
      },
    searchIcon:{
      color:'#0043c0',
      fontSize:'2rem',
      fontWeight:1000,
      display:{xs:'none',sm:'block'},
      alignItems:'center',
      textAlign:'center', 
      ml:8,
    },
    sidebarIcon:{
      display:{xs:'none',sm:'block'}
    },
    tab:{
      minWidth:200,
      width:200
    }
}