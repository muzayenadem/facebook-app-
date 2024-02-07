//import React from 'react'

import {  Stack } from "@mui/material"
import SideNav from "../../components/AllPeoplePageComponent/SideNav"
import Home from "../../components/AllPeoplePageComponent/FriendHome/Home"
import { useEffect, useState } from "react"
import eventComponent from '../../EventEmittter/EventComponent'
import FriendRequest from "../../components/AllPeoplePageComponent/FriendRequest/FriendRequest"
import SuggestionFriend from "../../components/AllPeoplePageComponent/SuggestionFriends/SuggestionFriend"
import AllFrinds from "../../components/AllPeoplePageComponent/AllFriends/AllFrinds"
import Birthday from "../../components/AllPeoplePageComponent/Birthday/Birthday"
import CustomListFriends from "../../components/AllPeoplePageComponent/CustomListFriends/CustomListFriends"
function PeoplePage() {
  const home = <Home/>
  const [space, setSpace] = useState(home)

useEffect(()=>{

  const returning = eventComponent.subscriber('FriendsComponentReturn',(data)=>{
    if(data.isFrom == 'friendsHome'){
      setSpace(home)
    }
    else if(data.isFrom == 'friendsRequest'){
      const friendsRequest = <FriendRequest/>
      setSpace(friendsRequest)
    }
    else if(data.isFrom == 'friendsSuggestion'){
      const frindsSugestin = <SuggestionFriend/>
      setSpace(frindsSugestin)
    }
    else if(data.isFrom == 'friendsAllFriends'){
      const frindAllFrin  = <AllFrinds/>
      setSpace(frindAllFrin)
    }
    else if(data.isFrom == 'friendsBirthday'){
      const frindBirthday = <Birthday/>
      setSpace(frindBirthday)
    }
    else if(data.isFrom == 'friendsCustomList'){
      const friendsCustomlist = <CustomListFriends/>
      setSpace(friendsCustomlist)
    }
  })
  return ()=>{
    returning
  }
})
  return (
    <Stack direction='row' spacing={{md:40,xl:200}}>
        <Stack>
        <SideNav/>
        </Stack>
        <Stack >
        {space}
        </Stack>
    </Stack>
  )
}

export default PeoplePage