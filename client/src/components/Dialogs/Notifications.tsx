import * as React from 'react'
import eventComponent from '../../EventEmittter/EventComponent'
import { Button,Dialog,DialogProps,DialogActions,DialogContent,DialogContentText,DialogTitle, Stack, Typography, Box, Avatar } from '@mui/material'
import { MoreHoriz, PointOfSale, Settings } from '@mui/icons-material'
import './Dialogs.css'
import photo from '../../pictures/br1.jpg'



import {fetchUsersList} from '../../Feutures/allUsersSlice'

import { useSelector,useDispatch } from 'react-redux'

export default function Notifications(){
    const [open,setOpen] = React.useState(false)
    const [singleData,setSingleData] = React.useState(false)
    const [space,setSpace] = React.useState('')
    const [scroll,setScroll] = React.useState<DialogProps['scroll']>('paper')



  // dispathing
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(fetchUsersList())
  },[])

  const data = useSelector((state) => state.allUsersList.list)



    const handleClickOpen = (scrollType:DialogProps['scroll']) => () =>{
        setOpen(true)
        setScroll(scrollType)
    };
    const handleClose = () =>{
        setOpen(false)
    };
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
        const returning = eventComponent.subscriber('returnNotification',(data)=>{
            if(data.isFrom == 'notification'){
                setOpen(data.isTrue)
                setSpace(data.isFrom)
            }
        })
        return () =>{
            returning
        }     
    },[])


    return (
        <div>
            <Dialog
               sx={{top:3,right:2}}
               open={open}
               onClose={handleClose}
               scroll={scroll}
               aria-labelledby='scroll-dialog-title'
               aria-describedby='scroll-dialog-description'
               PaperProps={{sx:{position:'fixed',top:50,right:'0px',width:420}}}
               >
            {/* <DialogTitle id='scroll-dialog-title'>
                {space}
            </DialogTitle> */}
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                id='scroll-dialog-dscription'
                ref={descriptionElementRef}
                tabIndex={-1}
                >
                    <Stack direction={'row'} spacing={27} mt={3}>
                        <Typography sx={{fontWeight:1000}} variant='h6'>Notificiation</Typography>
                       <Avatar sx={{backgroundColor:'white',color:'black'}}> <MoreHoriz/></Avatar>
                    </Stack>
                    <Stack  direction={'row'} spacing={2} mt={2}>
                        <Button variant='text' sx={{backgroundColor: '#a5c1c6',borderRadius:'40%',padding:'6px 5px'} }>All</Button>
                        <Button  variant='text'sx={{color:'black'}}> Unread</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={30} mt={2}>
                        <Typography variant='h5' sx={{fontWeight:1000}}>
                            Erlier
                        </Typography>
                        <Button variant='text'>see All</Button>
                    </Stack>
                    <Stack>
                     {data.map((single,index) =>{
                        const space = <Settings/>
                        return <div key={index} className='single' onMouseOver={()=>{
                            if(single.firstName == single.firstName){
                                setSingleData(true)
                            }
                        }}>
                         <Stack direction={'row'} spacing={3}>
                            <Stack>
                                <Box component={'img'} src={photo} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Stack>
                           <Typography>you have a new friend suggestion:</Typography>
                           <Typography>{single.firstName}</Typography>
                           </Stack>
                           {/* {singleData  &&  <div onClick={()=>alert('allll')}>{space}</div>} */}
                           <div className='mee'><Settings/></div>
                           </Stack>
                           </Stack>   
                        </div>
                     })}   
                    </Stack>
                </DialogContentText>
            </DialogContent>
               </Dialog>
        </div>
    );
}

