import React, { useEffect } from 'react'
import {BrowserRouter as  Router,Route,Link, Routes } from 'react-router-dom'
import Home from '../containers/Home/Home'
import PeoplePage from '../containers/PeoplePage/PeoplePage'
import PeoplePage2 from '../containers/PeoplePage/PeoplePage2'
import MarketPlace from '../containers/MarketPlace/MarketPlace'
import Video from '../containers/Videos/Video'
import Video2 from '../containers/Videos/video2'
import { useParams,useLocation } from 'react-router-dom'


import Outpage from '../components/OutPage/OutPage'
import Singup from '../components/OutPage/Singup'
import Login from '../components/OutPage/Login'
import ForgetPassword from '../components/OutPage/ForgetPassword'


import Vehicle from '../components/AllMarketPlaceComponents/Vehicle/Vehicle'
import BrowseAll from '../components/AllMarketPlaceComponents/BrowseAllMarketplace/BrowseAllMarketplace'
import BuyingMarketplace from '../components/AllMarketPlaceComponents/BuyingMarketplace/BuyingMarketplace'
import SellingMarketplace from '../components/AllMarketPlaceComponents/SellingMarketplace/SellingMarketplace'

import Let1 from '../components/AllMarketPlaceComponents/BuyingMarketplace/Let1'
import Let2 from '../components/AllMarketPlaceComponents/BuyingMarketplace/Let2'
import Let3 from '../components/AllMarketPlaceComponents/BuyingMarketplace/Let3'


import Sell1 from '../components/AllMarketPlaceComponents/SellingMarketplace/Sell1'
import Sell2 from '../components/AllMarketPlaceComponents/SellingMarketplace/Sell2'
import SearchMind from '../components/AllHomeComponents/SearchMind'  


import VideoHome from '../components/AllVidesComponents/VideoHome/VideoHome'
import SingleVideo from '../components/AllVidesComponents/VideoHome/SingleVideos/SingleVideo'
import LiveVideo from '../components/AllVidesComponents/LiveVideo/LiveVideo'
import ReelsVideo from '../components/AllVidesComponents/Reels/ReelsVideo'
import ShowsVideos from '../components/AllVidesComponents/ShowsVideo/ShowsVideos'
import Explore from '../components/AllVidesComponents/Explore/Explore'
import SavedVideos from '../components/AllVidesComponents/SavedVideos/SavedVideos'

 

import HomePeople from '../components/AllPeoplePageComponent/FriendHome/Home'
import FriendRequest from '../components/AllPeoplePageComponent/FriendRequest/FriendRequest'
import SuggestionFriend from '../components/AllPeoplePageComponent/SuggestionFriends/SuggestionFriend'
import AllFrinds from '../components/AllPeoplePageComponent/AllFriends/AllFrinds'
import CustomListFriends from '../components/AllPeoplePageComponent/CustomListFriends/CustomListFriends'
import Birthday from '../components/AllPeoplePageComponent/Birthday/Birthday'
import Sell3 from '../components/AllMarketPlaceComponents/SellingMarketplace/Sell3'
import SingleShowVideos from '../components/AllVidesComponents/ShowsVideo/SingleShowVideos'


import Main from '../containers/Main/Main'


function Routers() {
const videoId = useParams()


//const location = useLocation()
  return (
    <Router>
    <Routes>
     
     <Route path='/' element={<Outpage/>}>
      <Route path='' element={<Login/>}/>
     </Route>
        <Route path='/outpage' element={<Outpage/>}>
        <Route path='' element={<Login/>}/>
         <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Singup/>}/>
          <Route path='forgetpassword' element={<ForgetPassword/>}/>
        </Route>
    
 <Route path='home/:videoId' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>

        <Route path='people' element={<PeoplePage2/>}>
            <Route path='' element={<HomePeople/>}/>
            <Route path='friendrequest' element={<FriendRequest/>}/>
            <Route path='suggestionfriend' element={<SuggestionFriend/>}/>
            <Route path='allfriends' element={<AllFrinds/>}/>
            <Route path='customlist' element={<CustomListFriends/>}/>
            <Route path='birthday' element={<Birthday/>}/>
        </Route>



        <Route path='market' element={<MarketPlace/>}>
          <Route path='vehicle' element={<Vehicle/>}/>
          <Route path='' element={<BrowseAll/>}/>
          <Route path='buy' element={<BuyingMarketplace/>}/>
          <Route path='let1' element={<Let1/>}/>
          <Route path='let2' element={<Let2/>}/>
          <Route path='let3' element={<Let3/>}/>
          <Route path='sell' element={<SellingMarketplace/>}/>
          <Route path='sell1' element={<Sell1/>}/>
          <Route path='sell2' element={<Sell2/>}/>
          <Route path='sell3' element={<Sell3/>}/>
        </Route>



        <Route path='videos' element={<Video2/>}>
               <Route path='' element={<VideoHome/>}>

                <Route path=':id' element={<SingleVideo/>}/>
               </Route>
               <Route path='live' element={<LiveVideo/>}/>
               <Route path='reels' element={<ReelsVideo/>}/>
               <Route path='shows' element={<ShowsVideos/>}/>
               <Route path='shows/:videoId' element={<SingleShowVideos/>}/>
               <Route path='explore' element={<Explore/>}/>
               <Route path='saved' element={<SavedVideos/>}/>
        </Route>

    </Routes>
    </Router>
  )
}

export default Routers