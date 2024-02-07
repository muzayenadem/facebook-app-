//import React from 'react'

import {  Stack } from "@mui/material"
import VideoSideNav from "../../components/AllVidesComponents/VideoSideNav"
import VideoHome from "../../components/AllVidesComponents/VideoHome/VideoHome"
import LiveVideo from "../../components/AllVidesComponents/LiveVideo/LiveVideo"
import ReelsVideo from "../../components/AllVidesComponents/Reels/ReelsVideo"
import ShowsVideos from "../../components/AllVidesComponents/ShowsVideo/ShowsVideos"
import Explore from "../../components/AllVidesComponents/Explore/Explore"
import SavedVideos from "../../components/AllVidesComponents/SavedVideos/SavedVideos"

import { useEffect, useState } from "react"
import eventComponent from '../../EventEmittter/EventComponent'

function PeoplePage() {
  const home = <VideoHome/>
  const [space, setSpace] = useState(home)

useEffect(()=>{

  const returning = eventComponent.subscriber('VideoComponentsReturn',(data)=>{
    if(data.isFrom == 'videoHome'){
      setSpace(home)
    }
    else if(data.isFrom == 'videoLive'){
      const liveVideo = <LiveVideo/>
      setSpace(liveVideo)
    }
    else if(data.isFrom == 'videoReels'){
      const reelsVideo = <ReelsVideo/>
      setSpace(reelsVideo)
    }
     else if(data.isFrom == 'videoShows'){
      const showsVideo = <ShowsVideos/>
      setSpace(showsVideo)
    }
    else if(data.isFrom == 'videoExplore'){
      const exploreVideo = <Explore/>
      setSpace(exploreVideo)
    }
    else if(data.isFrom == 'videoSaved'){
      const savedVideo = <SavedVideos/>
      setSpace(savedVideo)
    }
  })
  return ()=>{
    returning
  }
})
  return (
    <Stack direction='row' spacing={{md:40,xl:200}}>
        <Stack>
        <VideoSideNav/>
        </Stack>
        <Stack >
        {space}
        </Stack>
    </Stack>
  )
}

export default PeoplePage