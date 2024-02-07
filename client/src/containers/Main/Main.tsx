import {Box, Stack} from '@mui/material'
import AppHeader from '../../components/AppHeader'
//import ProfileSideBar from './components/SideBars/ProfileSideBar'
import { ProSidebarProvider } from 'react-pro-sidebar'
//import Drawbar from './components/Drawbars/Drawbar'
import Account from '../../components/Dialogs/Account'
import Notifications from '../../components/Dialogs/Notifications'
import Messages from '../../components/Dialogs/Messages'
import CreateContent from '../../components/Dialogs/CreateContent'
//import ProfileSideBar2 from './components/SideBars/ProfileSideBar2'
 import Messenger from '../../components/Dialogs/Messenger'
import SearchHome from '../../components/Dialogs/SearchHome'
import Routers from '../../router/Routers'
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export const ProfileContext = React.createContext()
function App() {
// const [owner,setOwner] = useState({
//   firstName :'me',
//   lastName:'you'
// })
//const location = useLocation()
const {videoId} = useParams()
console.log(videoId)

// const video = dataSample.find((video)=> video.id === parseInt(videoId))
// const {firstName,lastName,email,password,  title,id,img} = video
useEffect(()=>{
  axios.get('http://localhost:9910/users')
  .then((result)=>{
   let find = result.data.find((res) => res.emailOrPhone ==="sadikadem@gmail.com")
    setOwner(find)
    console.log(result.data)
    ///console.log(videoId)
  })
  .catch((err)=>{
    console.log(err.message)
  })
},[])
  return (
    <>
    {/* <ProfileContext.Provider value={owner}>  */}
    <Box>
      <ProSidebarProvider>
      <Account/>
      <CreateContent/>
      <Messages/>
      <Notifications/>
      {/* <AppHeader/> */}
      <Stack sx={{mt:1}}>
      <Routers />
      </Stack>
      <SearchHome/>
      <Messenger/>
      </ProSidebarProvider>
    </Box>
    {/* </ProfileContext.Provider> */}
    </>
  )
}

export default App
