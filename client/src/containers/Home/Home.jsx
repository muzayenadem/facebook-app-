//import React from 'react'
import CreateStory from "../../components/AllHomeComponents/CreateStory"
import { Stack } from "@mui/material"
import SearchMind from "../../components/AllHomeComponents/SearchMind"
import PeoppleYouMayKnow from "../../components/AllHomeComponents/PeoppleYouMayKnow"
import HomeSideba from "../../components/AllHomeComponents/HomeSideba"
import LeftHomeSidebar from "../../components/AllHomeComponents/LeftHomeSidebar"
import PicturePost from "../../components/AllHomeComponents/PicturePost"
import ContentsPost from "../../components/AllHomeComponents/ContenstPost"
import AppHeader from "../../components/AppHeader"
function Home() {
  return (
    <>
    <AppHeader/>
    <Stack direction={'row'} sx={{
      display:'flex',
      flexWrap:'nowrap',
      justifyContent:'space-between'
    }} spacing={'auto'} mt={3}>
      <Stack display={{xs:'none',md:'block'}} position={'fixed'}>
        <LeftHomeSidebar/>
        </Stack>
   <Stack>
        <CreateStory/>
        <SearchMind/>
        <PeoppleYouMayKnow/>
        <PicturePost/>
        <ContentsPost/>
        </Stack>
        <Stack ml={6} display={{xs:'none',md:'block'}}>
          <HomeSideba/>
        </Stack>
    </Stack>
    </>
  )
}

export default Home