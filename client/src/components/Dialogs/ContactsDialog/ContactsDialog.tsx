import * as React from 'react'
import { Button,Dialog,DialogProps,DialogActions,DialogContent,DialogContentText,DialogTitle, Stack, Typography, Box, Avatar, TextField, Input, IconButton, DialogActionsProps } from '@mui/material'
import { Add, Clear, FileCopy, Image, MoreHoriz, Phone, Photo, PictureAsPdf, PointOfSale, Send, Settings, VideoCall, VideoCallTwoTone } from '@mui/icons-material'

import { useSelector,useDispatch } from 'react-redux'
import {fetchProfile} from '../../../Feutures/profileSlice' 

//mport profile from '../../../States/profileState'
import ContactEventEmitter from '../../../EventEmittter/ContactEventEmitter'
import axios from 'axios'
export default function ContactsDialog(){
    const [open,setOpen] = React.useState(false)
    const [open2,setOpen2] = React.useState(false)
    const [singleData,setSingleData] = React.useState(false)
    const [space,setSpace] = React.useState({name:'',image:''})
    const [message,setMessage] = React.useState(null)
    const [messageData, setMessageData] = React.useState('')
    const [realMessage,setRealMessage] = React.useState(null)
    const [scroll,setScroll] = React.useState<DialogProps['scroll']>('paper')
    const handleClickOpen = (scrollType:DialogProps['scroll']) => () =>{
        setOpen(true)
        setScroll(scrollType)
    };
    const handleClose = () =>{
        setOpen(false)
    };
    const handkleClickOpen2 = ()=>{
        setOpen2(true)
    }

  // dispatching
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(fetchProfile())
   
  },[])

  const userSellect = useSelector((state) => state.profile)
  const profile = userSellect.profile



    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(()=>{
        if(open){
            const {current : descriptionElement} = descriptionElementRef;
           if(descriptionElement !== null){
            descriptionElement.focus()
           }
        }
    },[open])
    React.useEffect(()=>{
        const returning = ContactEventEmitter.subscriber('RETURN',(data)=>{
            if(data.isFrom == 'CONTACT'){
                setOpen(true)
                setSpace(data.data)
            }
        })
        return () =>{
          returning
        }     
    },[])
// console.log(space.messag)

 React.useEffect(()=>{
    console.log(space)

 },[])

    const changeHandler = async () =>{
        setRealMessage(message)
        const data2 = []
        space.message.map(d => data2.push(d.text))
       console.log(data2)
      //console.log(space.message)
        const emailToSend = space.emailOrPhone
       const  {firstName ,emailOrPhone}= profile
     //console.log(space.message)
        try {
            await axios.post('http://localhost:9910/message',{emailToSend,message,messegeFrom:emailOrPhone,name:firstName})
            
        } catch (error) {
            console.log(error)
        }

     
    }
    const msg = [
        {
            name:space.name,
            msg:'hi',
        },
        {
            name:'Profile',
            msg:'hello',
        }
    ]
    
   
    const mes = []
// space.message.map((single)=>{
   
//    return mes.push(...single)

// })
        
    // const mess =  space.message((single)=> single.email === profile.emailOrPhone)

  //console.log(mes)

    return (
        <>
            <Dialog
               sx={{top:3,right:2}}
               open={open}
               onClose={handleClose}
               scroll={scroll}
               aria-labelledby='scroll-dialog-title'
               aria-describedby='scroll-dialog-description'
               PaperProps={{sx:{position:'fixed',bottom:-9,right:100,width:380,height:450}}}
               >
            <DialogTitle id='scroll-dialog-title'>
              <Stack direction={'row'} spacing={'auto'}>
                <Stack direction={'row'} spacing={1}>
                <Avatar src={space.image}/>
                <Typography variant='body2' sx={{fontWeight:700,textAlign:'center'}}> {space.firstName}</Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <IconButton color='primary'><Phone /></IconButton>
                    <IconButton color='primary'><VideoCall /></IconButton>
                    <IconButton onClick={handkleClickOpen2} color='primary'><MoreHoriz /></IconButton>
                    <IconButton color='primary'><Clear onClick={()=> setOpen(false)}/></IconButton>
                </Stack>
              </Stack>
            </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                id='scroll-dialog-dscription'
                ref={descriptionElementRef}
                tabIndex={-1}
                >
                   <Stack sx={{
                    textAlign:'center',
                   }}>
                     <Box component={'img'} src={space.image} style={{marginLeft:'35%',marginBottom:6, width:'70px',height:'70px',borderRadius:'50%',textAlign:'center'}}/>
                     <Typography sx={{fontWeight:1000}} variant='body2'>{space.name}</Typography>
                   </Stack>
                    {/* <Typography variant='body2'>{space.work}</Typography> */}
                    <Stack width={'100'} mt={4} mb={3} pt={3}>


                     {/* {msg.map(single=>{
                        return<>
                        {single.name !== space.name && (<Stack mt={2} direction={'row'} ml={'50%'} spacing={2}><Avatar sx={{width:28,height:28}} style={{backgroundColor:'green'}}>{single.name[0]}</Avatar><Typography  color={'secondary'}>{single.msg}</Typography></Stack>)}
                        {single.name === space.name && (<Stack mt={2} direction={'row'} spacing={2}><Avatar sx={{width:28,height:28}} sizes='small' style={{backgroundColor:'#112bab'}}>{single.name}</Avatar><Typography  color={'primary'}>{single.msg}</Typography></Stack>)}
                        </>
                     })}
                     {realMessage !== null && <Stack mt={2} direction={'row'} spacing={2}><Avatar sx={{width:28,height:28}} style={{backgroundColor:'#112bab'}}>{space.firstName[0]}</Avatar><Typography  color={'primary'}>{realMessage}</Typography></Stack>}
                     */}
                    
                    {/* {space.message.map(single=>{
                        return<>
                        {single.name !== space.name && (<Stack mt={2} direction={'row'} ml={'50%'} spacing={2}><Avatar sx={{width:28,height:28}} style={{backgroundColor:'green'}}>{single.name[0]}</Avatar><Typography  color={'secondary'}>{single.text}</Typography></Stack>)}
                        {single.name === space.name && (<Stack mt={2} direction={'row'} spacing={2}><Avatar sx={{width:28,height:28}} sizes='small' style={{backgroundColor:'#112bab'}}>{single.name}</Avatar><Typography  color={'primary'}>{single.text}</Typography></Stack>)}
                        </>
                     })}
                     {realMessage !== null && <Stack mt={2} direction={'row'} spacing={2}><Avatar sx={{width:28,height:28}} style={{backgroundColor:'#112bab'}}>{space.firstName[0]}</Avatar><Typography  color={'primary'}>{realMessage}</Typography></Stack>}
                      */}

                    </Stack>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Stack direction={'row'} ml={2}>
                 <IconButton color='primary'><Add/></IconButton> 
                 <IconButton color='primary'><Image/></IconButton> 
                 <IconButton color='primary'><VideoCall/></IconButton> 
                 <IconButton color='primary'><FileCopy/></IconButton> 
                  <input style={{borderRadius:'20px',padding:'2px 7px',backgroundColor:'#bcdeffdfF'}} onChange={(e)=>setMessage(e.target.value)} placeholder='send message'/>
                  <IconButton onClick={changeHandler} color='primary'><Send/></IconButton> 
                </Stack>
            </DialogActions>
               </Dialog>
               <Dialog open={open2} onClose={()=>setOpen2(false)}>
                <DialogContent>
                    <Typography>DHEDG EUIYDUE</Typography>
                </DialogContent>
               </Dialog>
        </>
    );
}