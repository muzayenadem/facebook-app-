import * as React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import eventComponent from '../../EventEmittter/EventComponent'
//import { makeStyles } from '@mui/material'
import { Button,Dialog,DialogProps,DialogActions,DialogContent,DialogContentText,DialogTitle, Card, CardContent, Avatar, Stack, Typography, Divider, Box, Link } from '@mui/material'
import { Bedtime, Brightness1, Feedback, Logout, Person, QuestionAnswer, QuestionMark, Settings } from '@mui/icons-material'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

// const useStyles = makeStyles({
//     Dialog:{
//         position:"absolute",
//         left:10,
//         top:30
//     }
// });
import { ProfileContext } from '../../containers/Main/Main'

import {fetchProfile} from '../../Feutures/profileSlice'
import {fetchToken}  from '../../Feutures/loggedInAuthSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Account(){
    
    //const classes = useStyles()
    // const profile = useContext(ProfileContext

    // const [token, setToken] = React.useState(undefined)

    const [open,setOpen] = React.useState(false)
    const [space,setSpace] = React.useState('')
    //const navigate = useNavigate()
    const [scroll,setScroll] = React.useState<DialogProps['scroll']>('paper')

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(fetchProfile())
    },[])
   const userSellect = useSelector((state) => state.profile)
   const {firstName,lastName,emailOrPhone,_id} = userSellect.profile
    
// to get the token value from server

useEffect(()=>{
    dispatch(fetchToken())
},[])
const tokenSellector = useSelector((state)=> state.token)
let  token = tokenSellector.token

console.log(tokenSellector)
//    const userProfile = userSellect.profile.find((user)=> user.emailOrPhone === 'muzynadem@gmail.com')
    const handleClickOpen = (scrollType:DialogProps['scroll']) => () =>{
        setOpen(true)
        setScroll(scrollType)
    };
    const handleClose = () =>{
        setOpen(false)
    };
    const descriptionElementRef = React.useRef<HTMLElement>(null);
     useEffect(()=>{
        if(open){
            const {current : descriptionElement} = descriptionElementRef;
           if(descriptionElement !== null){
            descriptionElement.focus()
           }
        }
    },[open])
    React.useEffect(()=>{
        const returning = eventComponent.subscriber('returnAccount',(data)=>{
            if(data.isFrom == 'account'){
                setOpen(data.isTrue)
                setSpace(data.isFrom)
            }
        })
        return () =>{
            returning
        }     
    },[])


   const LogoutHandler = () =>{
     axios.get('http://localhost:9910/logout')
    window.location='http://localhost:5173'

   }

    return (
        <div style={{width:'60%'}}>
            <Dialog
               sx={{top:3,right:2}}
               open={open}
               onClose={handleClose}
               scroll={scroll}
               aria-labelledby='scroll-dialog-title'
               aria-describedby='scroll-dialog-description'
               PaperProps={{sx:{position:'fixed',top:50,right:'0px',width:400}}}
               >
            {/* <DialogTitle id='scroll-dialog-title'>
                 {space}
            </DialogTitle> */}
            <DialogContent dividers={scroll === 'paper'} >
                <DialogContentText
                id='scroll-dialog-dscription'
                ref={descriptionElementRef}
                tabIndex={-1}
                 >
               <Card>
                 <CardContent>
                    <Stack direction={'row'} spacing={2}>
                    <Avatar>
                        <Person/>
                    </Avatar>
                   <Typography variant='h6'>{firstName} {lastName} </Typography>
                    </Stack>
                    <Box sx={{borderBottom:2, color:'divider',mt:2 }}/>
                    <Typography color='primary'>See all profiles</Typography>
                 </CardContent>
               </Card>
               <Sidebar style={{
                width:'100%'
               }}>
                <Menu>
                    <MenuItem icon={ <Avatar sx={{color:'black'}}><Settings/></Avatar>}>
                        <Typography style={style.friends} variant='h6'> Settings & Privacy </Typography>
                    </MenuItem>
                    <MenuItem icon={ <Avatar sx={{color:'black'}}><QuestionMark/></Avatar>}>
                        <Typography style={style.friends} variant='h6'>Help & Support </Typography>
                    </MenuItem>
                    <MenuItem icon={ <Avatar sx={{color:'black'}}><Bedtime/></Avatar>}>
                        <Typography style={style.friends} variant='h6'>  Display & accesibility </Typography>
                    </MenuItem>
                    <MenuItem icon={ <Avatar sx={{color:'black'}}><Feedback/></Avatar>}>
                        <Typography style={style.friends} variant='h6'>Give Feedback</Typography>
                    </MenuItem>
                    <MenuItem onClick={LogoutHandler} icon={ <Avatar sx={{color:'black'}}><Logout/></Avatar>}>
                        <Typography style={style.friends} variant='h6'>Logout</Typography>
                    </MenuItem>
                </Menu>
               </Sidebar>
               <Stack sx={{display:'flez',flexWrap:"wrap",mt:2}}>
               <Link underline='none'  sx={{color:'grey',ml:1}}> Privacy</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>Terms</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}> Advertising</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>Add Choice</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>cookies</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>More</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>Meta</Link><i>-</i>
               <Link underline='none' sx={{color:'grey',ml:1}}>coppyright</Link><i>-</i>
               </Stack>
               <Stack>
               {/* <ul>
                {
                    userSellect.profile.map((user)=>{
                        return <li key={user._id}>{user.firstName}</li>
                    })
                }
               </ul> */}
               </Stack>
                </DialogContentText>
            </DialogContent>
               </Dialog>
        </div>
    );
}
/** @type {import('@mui/material').SxProps} */
const style ={
    friends:{
        fontWeight:1000,
    }
}