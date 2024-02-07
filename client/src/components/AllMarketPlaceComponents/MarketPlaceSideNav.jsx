//import React from 'react'
import {   Add, ApprovalRounded, BackHand, BugReport, CarCrash, CarRental, ClassOutlined, CreditCard, FireExtinguisherRounded, FunctionsRounded, Games, GradeRounded, HearingTwoTone, HomeMax, HomeMini, HomeRepairServiceSharp, Inbox, LocalPostOffice, MobileFriendly, MusicNote, Notifications, OpenInBrowser, Pets, Sell, SellRounded, Settings,SpokeTwoTone, TransitEnterexitOutlined} from '@mui/icons-material'
import { Typography, Stack, IconButton, Button, Box, AppBar, Toolbar, Avatar, Autocomplete, TextField } from '@mui/material'
//import { Query } from 'mongoose'
import {Sidebar,Menu, MenuItem} from 'react-pro-sidebar'
import eventComponent from '../../EventEmittter/EventComponent'
import eventComponentTwo from '../../EventEmittter/EventComponentTwo'
import '../AllPeoplePageComponent/style.css'
import { useState } from 'react'

function MarketPlaceSideNav() {
    const [emtySpace,setEmptySpace] = useState(null)
    const [sidebar, setSidebar] = useState(1)
    const [placeHolder,setPlaceHolder] =useState('Browse All')
    const [content, setContent] = useState(' > Browse All')
    const [value,setValue] = useState()
    const data4 = ['Muzayen','Mubarek','Sadik','Keerii','Abbittii']
const browseAllMarketClicker = () =>{
 const result1 = {
    isFrom:'browseAllMarketplace',
 } 
 eventComponent.emit('MarketPlaceComponentsReturn',result1)
 setContent(' > Browse All')
 setPlaceHolder('Browse All')
 setEmptySpace(null)
}

const  notificationMarketClicker  = () =>{
    const result1 = {
       isFrom:'notificationMarketplace',
    } 
    eventComponent.emit('MarketPlaceComponentsReturn',result1)
    setContent(' > Notification')
    setPlaceHolder('Notification')
    setEmptySpace(null)
   }
const inboxMarketClicker = () =>{
    const result1 = {
        isFrom:'inboxMarketplace',   
    } 
    eventComponent.emit('MarketPlaceComponentsReturn',result1)
    setContent(' > Inbox')
    setPlaceHolder('Inbox')
    setEmptySpace(null)
   }
   
   const buyingMarketClicker = () =>{
    const result1 = {
        isFrom:'buyingMarketplace',
    } 
    eventComponent.emit('MarketPlaceComponentsReturn',result1)
    setSidebar(2)
   }
   const sellingMarketClicker = () =>{
    const result1 = {
       isFrom:'sellingMarketplace',
    } 
    eventComponent.emit('MarketPlaceComponentsReturn',result1)
    setSidebar(3)
   }
   const vehicleMarketClicker  = () =>{
    const result1 = {
       isFrom:'vehicleMarketplace',
    } 
    eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
    const space = <Typography variant='h2'>From Vehicles</Typography>
    setContent(' > Vehicles')
    setPlaceHolder('Vehicles')
    setEmptySpace(space)
   }
   const propertyRentalClicker  = () =>{
    const result1 = {
       isFrom:'propertyRental',
    } 
    eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
    const space = <Typography variant='h2'>From Property Rent</Typography>
    setContent(' > Property Rental')
    setPlaceHolder('Property Rental')
    setEmptySpace(space)
   }
   const apperalClicker  = () =>{
    const result1 = {
       isFrom:'apperal',
    } 
    eventComponentTwo.emit('MarketPlaceComponentsReturn2',result1)
    const space = <Typography variant='h2'>From Apperal</Typography>
    setContent(' > Apperal')
    setPlaceHolder('Apperal')
    setEmptySpace(space)
   }
     


   
if(sidebar ===1){
  return (
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
        renderInput={(spread)=> <TextField fullWidth variant='filled' {...spread} label='select your favorate'/>}
        value={value}
        onChange={event => setValue(data4[event.target])}
        
       />
        </Stack>
            </Toolbar>  
        </AppBar>
        <Box sx={{mb:3,mt:20}}>
        {emtySpace}
        </Box>
        {/* {emtySpace == null ? <Box sx={{borderBottom:1 ,mb:3,mt:1}}/>:null} */}
        <Menu >
            <MenuItem  onClick={browseAllMarketClicker} icon={<OpenInBrowser/>}>
            <Typography variant='body2'>Browse all</Typography>
            </MenuItem>
            <MenuItem onClick={notificationMarketClicker} icon={<Notifications/>}>
            <Typography variant='body2' >Notifications</Typography>
            </MenuItem>
            <MenuItem onClick={inboxMarketClicker} icon={<Inbox/>}>
            <Typography variant='body2' >Inbox</Typography>
            </MenuItem>
            <MenuItem onClick={buyingMarketClicker} icon={<BugReport/>}>
            <Typography variant='body2' >Buying</Typography>
            </MenuItem>
            <MenuItem onClick={sellingMarketClicker} icon={<Sell/>}>
            <Typography variant='body2' >Selling</Typography>
            </MenuItem>
            <Button variant='outlined' color='primary' startIcon={<Add/>}>Create new listing</Button>
        <Box sx={{borderBottom:2,mt:1, color:'divider'}}/>
        <Typography sx={style.friends} variant='h6'>Filters</Typography>
        <Typography variant='h6' color='primary' sx={{fontWeight:1000,fontSize:'1rem'}}>{`Hosa'ina-Within 65 kilometers`}</Typography>
        <Box sx={{borderBottom:2,mt:1, color:'divider'}}/>
        <Typography sx={style.friends} variant='h6'>Categories</Typography>
            <MenuItem icon={<CarCrash/>}>
                <Typography onClick={vehicleMarketClicker} variant='body2'>Vehicle</Typography>
            </MenuItem>
            <MenuItem icon={<CarRental/>}>
                <Typography onClick={propertyRentalClicker} variant='body2'>Property Rental</Typography>
            </MenuItem>
            <MenuItem icon={<ApprovalRounded/>}>
                <Typography onClick={apperalClicker} variant='body2'>Apparel</Typography>
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
  )}
  else if(sidebar  === 2){
    return(
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
                <MenuItem onClick={()=> setSidebar(1)} icon={<BackHand/>}></MenuItem>
                <MenuItem icon={<CreditCard/>}>
                    Buying
                </MenuItem>
            </Menu>
        </Sidebar>
    )}
    else if(sidebar === 3){
        return(
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
                    <MenuItem onClick={()=> setSidebar(1)} icon={<BackHand/>}></MenuItem>
                    <MenuItem icon={<SellRounded/>}>
                      Selling
                    </MenuItem>
                </Menu>
            </Sidebar>
        )
    }
}

export default MarketPlaceSideNav
/** @type {import('@mui/material').SxProps} */
const style ={
    friends:{
        fontWeight:1000,
    }
}