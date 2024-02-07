import React from 'react'
import {   Add, ApprovalRounded, BackHand, BugReport, Camera, CarCrash, CarRental, CatchingPokemon, CircleNotifications, ClassOutlined, CreditCard, EmojiEvents, FireExtinguisherRounded, FunctionsRounded, Games, GradeRounded, HearingTwoTone, HomeMax, HomeMini, HomeRepairServiceSharp, Inbox, LocalPostOffice, Message, MobileFriendly, MusicNote, Notifications, OpenInBrowser, Pets, Sell, SellRounded, Settings,SpokeTwoTone, TransitEnterexitOutlined} from '@mui/icons-material'
import { Typography, Stack, IconButton, Button, Box, AppBar, Toolbar, Avatar, Autocomplete, TextField, InputAdornment } from '@mui/material'
//import { Query } from 'mongoose'
import {Sidebar,Menu, MenuItem} from 'react-pro-sidebar'
import eventComponent from '../../EventEmittter/EventComponent'
import eventComponentTwo from '../../EventEmittter/EventComponentTwo'
//import '../AllPeoplePageComponent/style.css'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AppHeader from '../../components/AppHeader'

function MarketPlace() {
    const [emtySpace,setEmptySpace] = useState(null)
    const [sidebar, setSidebar] = useState(1)
    const [placeHolder,setPlaceHolder] =useState('Browse All')
    const [content, setContent] = useState(' > Browse All')
    const [value,setValue] = useState()
    const [space,SetSpace] = useState('')
    const navigate = useNavigate


    
    const data4 = ['Muzayen','Mubarek','Sadik','Keerii','Abbittii']
// const browseAllMarketClicker = () =>{
//  const result1 = {
//     isFrom:'browseAllMarketplace',
//  } 
//  eventComponent.emit('MarketPlaceComponentsReturn',result1)
//  setContent(' > Browse All')
//  setPlaceHolder('Browse All')
//  setEmptySpace(null)
// }

// const  notificationMarketClicker  = () =>{
//     const result1 = {
//        isFrom:'notificationMarketplace',
//     } 
//     eventComponent.emit('MarketPlaceComponentsReturn',result1)
//     setContent(' > Notification')
//     setPlaceHolder('Notification')
//     setEmptySpace(null)
//    }
// const inboxMarketClicker = () =>{
//     const result1 = {
//         isFrom:'inboxMarketplace',   
//     } 
//     eventComponent.emit('MarketPlaceComponentsReturn',result1)
//     setContent(' > Inbox')
//     setPlaceHolder('Inbox')
//     setEmptySpace(null)
//    }
   
//    const buyingMarketClicker = () =>{
//     const result1 = {
//         isFrom:'buyingMarketplace',
//     } 
//     eventComponent.emit('MarketPlaceComponentsReturn',result1)
//     setSidebar(2)
//    }
//    const sellingMarketClicker = () =>{
//     const result1 = {
//        isFrom:'sellingMarketplace',
//     } 
//     eventComponent.emit('MarketPlaceComponentsReturn',result1)
//     setSidebar(3)
//    }
//    const vehicleMarketClicker  = () =>{
//     const result1 = {
//        isFrom:'vehicleMarketplace',
//     } 
//     eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
//     const space = <Typography variant='h2'>From Vehicles</Typography>
//     setContent(' > Vehicles')
//     setPlaceHolder('Vehicles')
//    // setEmptySpace(space)
//    }
//    const propertyRentalClicker  = () =>{
//     const result1 = {
//        isFrom:'propertyRental',
//     } 
//     eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
//     const space = <Typography variant='h2'>From Property Rent</Typography>
//     setContent(' > Property Rental')
//     setPlaceHolder('Property Rental')
//    // setEmptySpace(space)
//    }
//    const apperalClicker  = () =>{
//     const result1 = {
//        isFrom:'apperal',
//     } 
//     eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
//     const space = <Typography variant='h2'>From Apperal</Typography>
//     setContent(' > Apperal')
//     setPlaceHolder('Apperal')
//     //setEmptySpace(space)
//    }
     


   
if(sidebar ===1){
  return (
    <>
    
  <AppHeader/>
<Stack direction={'row'} spacing={{xs:10,sm:50,md:60,xl:70}}>
  <Stack display={{xs:'none',sm:'block'}}>
    <Sidebar
    className='da'
    style={{
        height: '100%',
        top:'auto',
        width:'400px',
        position:'fixed',
        // paddingTop:90
      }}
     // breakPoint='all'
     backgroundColor={'white'}
    >
        <AppBar  sx={{mb:100,mt:{sx:20,sm:15,md:10},width:'400px',left:1,backgroundColor:'white', color:'black',pt:4,pb:4}}>
            <Toolbar>
            <Stack position={'fixed'}>
        <Stack direction={'row'}  spacing={8}>
            <Stack direction={'row'} spacing={1} width={'80%'}>
            <Typography sx={style.friends} variant='h6'>{`Marketplace`}</Typography>
             <Typography variant='h6' sx={{mt:1}}>{`${content}`}</Typography>
            </Stack>
            <IconButton>
           <Avatar sx={{color:'black',right:2}}><Settings/> </Avatar>  
            </IconButton>
        </Stack>
        {/* <input  id='marketplaceSearch' placeholder={`Search ${placeHolder}`}/> */}
        <Autocomplete
        fullWidth
        options={data4}
        renderInput={(spread)=> <TextField variant='outlined' {...spread} size='small' placeholder='write comment' label='select your favorate' aria-placeholder='write comment' sx={style.textField} 
        />}
        value={value}
        onChange={event => setValue(data4[event.target])}
        
       />
         {/* <TextField variant='outlined' size='small' placeholder='write comment' label='select your favorate' aria-placeholder='write comment' sx={style.textField} 
        />  */}
        </Stack>
            </Toolbar>  
        </AppBar>
        <Box sx={{mb:3,mt:20}}>
        {emtySpace}
        </Box>
        {/* {emtySpace == null ? <Box sx={{borderBottom:1 ,mb:3,mt:1}}/>:null} */}
        <Menu >
            <MenuItem component={<Link to={'/market/'}/>}  icon={<OpenInBrowser/>}>
            <Typography variant='body2'>Browse all</Typography>
            </MenuItem>
            <MenuItem  component={<Link to={'/market/vehicle'}/>}  icon={<Notifications/>}>
            <Typography variant='body2' >Notifications</Typography>
            </MenuItem>
            <MenuItem icon={<Inbox/>}>
            <Typography variant='body2' >Inbox</Typography>
            </MenuItem>
            <MenuItem onClick={()=>setSidebar(2)} component={<Link to={'/market/buy'}/>} icon={<BugReport/>}>
            <Typography variant='body2' >Buying</Typography>
            </MenuItem>
            <MenuItem onClick={()=>setSidebar(3)} component={<Link to={'/market/sell'}/>}  icon={<Sell/>}>
            <Typography variant='body2' >Selling</Typography>
            </MenuItem>
            <Button variant='outlined' color='primary' startIcon={<Add/>}>Create new listing</Button>
        <Box sx={{borderBottom:2,mt:1, color:'divider'}}/>
        <Typography sx={style.friends} variant='h6'>Filters</Typography>
        <Typography variant='h6' color='primary' sx={{fontWeight:1000,fontSize:'1rem'}}>{`Hosa'ina-Within 65 kilometers`}</Typography>
        <Box sx={{borderBottom:2,mt:1, color:'divider'}}/>
        <Typography sx={style.friends} variant='h6'>Categories</Typography>
   
            <MenuItem icon={<CarCrash/>}>
                <Typography variant='body2'>Vehicle</Typography>
            </MenuItem>
            <MenuItem icon={<CarRental/>}>
                <Typography variant='body2'>Property Rental</Typography>
            </MenuItem>
            <MenuItem icon={<ApprovalRounded/>}>
                <Typography  variant='body2'>Apparel</Typography>
            </MenuItem>
            <MenuItem icon={<ClassOutlined/>}>
                <Typography variant='body2'>Classified</Typography>
            </MenuItem>
            <MenuItem icon={<MobileFriendly/>}>
                <Typography variant='body2'>Electronics</Typography>
            </MenuItem>
            <MenuItem icon={<TransitEnterexitOutlined/>}>
                <Typography variant='body2'>    Entertainment</Typography>
            </MenuItem>
            <MenuItem icon={<HearingTwoTone/>}>
                <Typography variant='body2'>Family</Typography>
            </MenuItem> 
            <MenuItem icon={<FireExtinguisherRounded/>}>
                <Typography variant='body2'>Free Stuff</Typography>
            </MenuItem> 
            <MenuItem icon={<GradeRounded/>}>
                <Typography variant='body2'>Gardens & Out door</Typography>
            </MenuItem> 
            <MenuItem icon={<FunctionsRounded/>}>
                <Typography variant='body2'>Hobbies</Typography>
            </MenuItem> 
            <MenuItem icon={<HomeRepairServiceSharp/>}>
                <Typography variant='body2'>Home Goods</Typography>
            </MenuItem> 
            <MenuItem icon={<HomeMini/>}>
                <Typography variant='body2'>Home Improvment Supplies</Typography>
            </MenuItem> 
            <MenuItem icon={<HomeMax/>}>
                <Typography variant='body2'>Home Sales</Typography>
            </MenuItem> 
            <MenuItem icon={<MusicNote/>}>
                <Typography variant='body2'>Musical Instruments</Typography>
            </MenuItem> 
            <MenuItem icon={<LocalPostOffice/>}>
                <Typography variant='body2'>Office Supplies</Typography>
            </MenuItem> 
            <MenuItem icon={<Pets/>}>
                <Typography variant='body2'>Pet Supplies</Typography>
            </MenuItem> 
            <MenuItem icon={<SpokeTwoTone/>}>
                <Typography variant='body2'>Sporting Goods</Typography>
            </MenuItem> 
            <MenuItem icon={<Games/>}>
                <Typography variant='body2'>Toys & Games</Typography>
            </MenuItem> 
            <MenuItem icon={<SellRounded/>}>
                <Typography variant='body2'>Buy & Sell Group</Typography>
            </MenuItem> 

        </Menu>
        <Box sx={{mb:20}}></Box>
    </Sidebar>
    </Stack>
    <Stack>
     {sidebar ==1 ? <Outlet/> : null}
    </Stack>
    </Stack>
    </>
  )}
  else if(sidebar  === 2){
    return(
      <Stack direction={'row'} spacing={70}>
        <Stack>
        <Sidebar
        className='da'
        style={{
            height: '100%',
            top:'auto',
            width:'400px',
            position:'fixed',
            // paddingTop:90
          }}
         // breakPoint='all'
         backgroundColor={'white'}
        >
            <Menu>
                <MenuItem component={<Link to={'/market/buy'}/>} onClick={()=> setSidebar(1)} icon={<BackHand/>}></MenuItem>
                <MenuItem component={<Link to={'/market/let1'}/>} icon={<CreditCard/>}>
                    Buying
                </MenuItem>
                <MenuItem component={<Link to={'/market/let2'}/>} icon={<CreditCard/>}>
                    Buying two
                </MenuItem>
                <MenuItem component={<Link to={'/market/let3'}/>} icon={<CreditCard/>}>
                    Buying  three
                </MenuItem>
            </Menu>
        </Sidebar>
        </Stack>
        <Stack>
           <Outlet/>
        </Stack>
        </Stack>
    )}
    else if(sidebar === 3){
        return(
          <Stack direction={'row'} spacing={70}>
          <Stack>
          <Sidebar
          className='da'
          style={{
              height: '100%',
              top:'auto',
              width:'400px',
              position:'fixed',
              // paddingTop:90
            }}
           // breakPoint='all'
           backgroundColor={'white'}
          >
              <Menu>
                  <MenuItem component={<Link to={'/market/sell'}/>} onClick={()=> setSidebar(1)} icon={<BackHand/>}></MenuItem>
                  <MenuItem component={<Link to={'/market/sell1'}/>} icon={<CreditCard/>}>
                      Sellling one
                  </MenuItem>
                  <MenuItem component={<Link to={'/market/sell2'}/>} icon={<CreditCard/>}>
                      Buying two
                  </MenuItem>
                  <MenuItem component={<Link to={'/market/sell3'}/>} icon={<CreditCard/>}>
                      Buying  three
                  </MenuItem>
              </Menu>
          </Sidebar>
          </Stack>
          <Stack>
             <Outlet/>
          </Stack>
          </Stack>
        
        )
    }
}

export default MarketPlace

/** @type {import('@mui/material').SxProps} */
const style={
    textField:{
      display:'flex',
      borderRadius:'70px',
      width:'100%',
      [`& fieldset`]:{
        borderRadius:30,
        borderColor:'none'
      }
    },
    friends:{
        fontWeight:1000,
    }
  }