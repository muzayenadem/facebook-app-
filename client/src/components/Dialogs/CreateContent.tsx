import * as React from 'react'
import './Dialogs.css'
import eventComponent from '../../EventEmittter/EventComponent'
//import { makeStyles } from '@mui/material'
import photo from '../../pictures/br1.jpg'
import { Button,Dialog,DialogProps,DialogActions,DialogContent,DialogContentText,DialogTitle, Stack, Typography, Card, CardContent, Box, Avatar } from '@mui/material'
import { Event, History, PostAdd, ReceiptLong, Settings } from '@mui/icons-material'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
// const useStyles = makeStyles({
//     Dialog:{
//         position:"absolute",
//         left:10,
//         top:30
//     }
// });
export default function Account(){
    //const classes = useStyles()
    const [open,setOpen] = React.useState(false)
    const [singleData,setSingleData] = React.useState(false)
    const [space,setSpace] = React.useState('')
    const [scroll,setScroll] = React.useState<DialogProps['scroll']>('paper')

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
        const returning = eventComponent.subscriber('returnCreateContent',(data)=>{
            if(data.isFrom == 'createContent'){
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
               PaperProps={{sx:{position:'fixed',top:50,right:'0px',width:1200,pr:5,mr:10}}}
               >
            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                id='scroll-dialog-dscription'
                ref={descriptionElementRef}
                tabIndex={-1}
                >
                    <Stack direction={'row'} spacing={3} ml={0}>
                        <Stack width={'70%'} sx={{backgroundColor:'auto'}}>
                         <Card sx={{width:'300px'}}>
                            <CardContent>
                            <input 
                    placeholder='Search Menu' 
                    type='search' 
                    style={{
                        width:'90%',
                        marginLeft:'5%',
                        borderRadius:'20px',
                        padding:'12px 12px',
                        backgroundColor:'#ded4d4',
                        border:'none'
                    }} />
                    <Typography variant='h5' sx={{fontWeight:'1000'}}>Socail</Typography>
                    <Stack mt={2}>
                     {data.map((single,index) =>{
                        const space = <Settings/>
                        return <div key={index} className='single' onMouseOver={()=>{
                            if(single.name == single.name){
                                setSingleData(true)
                            }
                        }}>
                         <Stack direction={'row'} spacing={3}>
                            <Stack>
                                <Box component={'img'} src={photo} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Stack>
                           <Typography>{single.newFriend}</Typography>
                           <Typography>{single.name}</Typography>
                           </Stack>
                           {/* {singleData  &&  <div onClick={()=>alert('allll')}>{space}</div>} */}
                           <div className='mee'><Settings/></div>
                           </Stack>
                           </Stack>   
                        </div>
                     })}   
                    </Stack>
                            </CardContent>
                         </Card>
                        </Stack>
                        <Card sx={{
                            position:'relative',
                            width:'500px'
                        }}>
                            <CardContent>
                        <Stack position={'sticky'} top={'10px'} left={'10px'}>
                          <Sidebar>
                            <Typography sx={{fontWeight:'1000',ml:4}} variant='h5'>Create</Typography>
                            <Menu>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><PostAdd/></Avatar>}>
                                    <Typography variant='h5'>Post</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><History/></Avatar>}>
                                    <Typography variant='h5'>Story</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><ReceiptLong/></Avatar>}>
                                    <Typography variant='h5'>Reel</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><Event/></Avatar>}>
                                    <Typography variant='h5'>Life Events</Typography>
                                </MenuItem>
                               <Box sx={{borderBottom:2, color:'divider',mt:2,mb:3}}/>
                               <MenuItem icon={<Avatar sx={{color:'black'}}><PostAdd/></Avatar>}>
                                    <Typography variant='h5'>Post</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><History/></Avatar>}>
                                    <Typography variant='h5'>Story</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><ReceiptLong/></Avatar>}>
                                    <Typography variant='h5'>Reel</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><Event/></Avatar>}>
                                    <Typography variant='h5'>Life Events</Typography>
                                </MenuItem> <MenuItem icon={<Avatar sx={{color:'black'}}><PostAdd/></Avatar>}>
                                    <Typography variant='h5'>Post</Typography>
                                </MenuItem>
                                <MenuItem icon={<Avatar sx={{color:'black'}}><History/></Avatar>}>
                                    <Typography variant='h5'>Story</Typography>
                                </MenuItem>
                            </Menu>
                          </Sidebar>
                        </Stack>
                        </CardContent>
                        </Card>
                    </Stack>
                </DialogContentText>
            </DialogContent>
               </Dialog>
        </div>
    );
}
const data =[
    {
        name:'Muzayen Aadem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    },
    {
        name:'Muzayen Adem',
        newFriend:'you have a new friend suggestion:'
    }
]