
import React from 'react'
import { Avatar, AvatarGroup, Box, Button, ButtonGroup, ButtonGroupButtonContext, Card, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Divider, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import logo from '../../pictures/br1.jpg'
import './PeoppleYouMayKnow.css'
import { BorderColor, Camera, CatchingPokemon, CircleNotifications, Clear, EmojiEvents, HeartBroken, HeatPumpRounded, Interests, Login, Message, MoreHoriz, People, PersonPin, Share, ZoomOutMap } from "@mui/icons-material"
import { grey } from '@mui/material/colors'

function contentsPost() {
 const [open , SetOpen] = React.useState(false)
 const [scroll,setScroll] = React.useState<DialogProps['scroll']>('paper')

 const descriptionElementRef = React.useRef<HTMLElement>(null);
 React.useEffect(()=>{
     if(open){
         const {current : descriptionElement} = descriptionElementRef;
        if(descriptionElement !== null){
         descriptionElement.focus()
        }
     }
 },[open])

 const openClickHandler = () =>{
  SetOpen(true)
 }
    return (
      <>
        <Card sx={{mb:1, width:{xs:'550px',sm:'550px',md:'550px'}}} >
            <Box sx={{
              display:'flex',
              flexWrap:'none',
              justifyContent:'space-between',
              margin:2
            }} >
              <Stack direction={'row'} spacing={2}>
               <Stack>
               <Avatar src={logo}/>
               </Stack>
             <Stack direction={'column'}>
              <Typography variant='h6'>Muzayen Adem</Typography>
              <Stack direction={'row'} spacing={1}>
                <Typography variant='body2'>3d</Typography>
                <People/>
              </Stack>
             </Stack>
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <MoreHoriz/>
                <Clear/>            
              </Stack>
            </Box>
        <CardContent>
        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                 <Stack>
                 <Box sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  marginTop:1
                 }}>
                  <Stack direction={'row'} spacing={2}>
                    <AvatarGroup>
                      <Avatar sizes='small'><Share/></Avatar>
                      <Avatar sizes='small'><HeartBroken/></Avatar>
                    </AvatarGroup>
                     <Box sx={{
                      marginTop:2
                     }}>
                      <Typography>333</Typography>
                     </Box>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <Typography> 15 comment</Typography>
                    <Typography> 4 share</Typography>
                  </Stack>
                 </Box>
                  <Box sx={{
                    padding:2
                  }}>
                  <Divider/>
                  <ButtonGroup variant='' fullWidth>
                    
                    <Button startIcon={<Interests/>}>Like</Button>
                    <Button startIcon={<Message/>} onClick={openClickHandler}>Comment</Button>
                    <Button startIcon={<Share/>}>Share</Button>
                  </ButtonGroup>
                  </Box>
                  {/* <Typography variant='body2'> view more comments</Typography>
                  <Stack sx={{
                    margin:2
                  }} direction={'row'} spacing={1}>
                    <Avatar src={logo}/>
                    <Stack direction={'column'}>
                    <Box sx={{
                       backgroundColor:'rgba(207, 201, 201, 0.619)',
                      padding:'4px 10px',
                      borderRadius:'10px',
                    }}>
                      <Typography> this is the comment that from onather user</Typography>
                    </Box>
                    <Stack direction={'row'} spacing={1}>
                      <Typography variant='body2'>3d</Typography>
                      <Typography variant='body2'>Like</Typography>
                      <Typography variant='body2'>Reply</Typography>
                      <Typography variant='body2'>Share</Typography>  
                    </Stack>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>
                    <Avatar src={logo}></Avatar>
                    <TextField variant='outlined' size='small' placeholder='write comment' aria-placeholder='write comment' sx={style.textField} InputProps={{
                endAdornment:<InputAdornment position="end"><Stack spacing={0.2} direction={'row'}><Message/> <EmojiEvents/> <Camera/><CircleNotifications/><CatchingPokemon/></Stack></InputAdornment>
            }}
            />          
                  </Stack>  */}
                  
                  </Stack>       
         </CardContent>
    </Card>
       <div>
       <Dialog
          sx={{top:10,left:10}}
          open={open}
          onClose={()=> SetOpen(false)}
          scroll={scroll}
          aria-labelledby='scroll-dialog-title'
          aria-describedby='scroll-dialog-description'
          PaperProps={{sx:{position:'fixed',top:30,right:'30%px',bottom:'5%', width:800}}}
          >
            <DialogTitle>
            <Box sx={{
              display:'flex',
              flexWrap:'none',
              justifyContent:'space-between',
              margin:2
            }} >
              <Stack direction={'row'} spacing={2}>
               <Stack>
               <Avatar src={logo}/>
               </Stack>
             <Stack direction={'column'}>
              <Typography variant='h6'>Muzayen Adem</Typography>
              <Stack direction={'row'} spacing={1}>
                <Typography variant='body2'>3d</Typography>
                <People/>
              </Stack>
             </Stack>
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <MoreHoriz/>
                <Clear onClick={()=>SetOpen(false)}/>            
              </Stack>
            </Box>
            </DialogTitle>
       <DialogContent
        dividers={scroll === 'paper'}
        >
           <DialogContentText
           id='scroll-dialog-dscription'
           ref={descriptionElementRef}
           tabIndex={-1}
           >
             <Card sx={{mb:1, width:{xs:'550px',sm:'550px',md:'550px'}}} >
        <CardContent>
        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                 <Stack>
                 <Box sx={{
                  display:'flex',
                  justifyContent:'space-between',
                  marginTop:1
                 }}>
                  <Stack direction={'row'} spacing={2}>
                    <AvatarGroup>
                      <Avatar sizes='small'><Share/></Avatar>
                      <Avatar sizes='small'><HeartBroken/></Avatar>
                    </AvatarGroup>
                     <Box sx={{
                      marginTop:2
                     }}>
                      <Typography>333</Typography>
                     </Box>
                  </Stack>
                  <Stack direction={'row'} spacing={2}>
                    <Typography> 15 comment</Typography>
                    <Typography> 4 share</Typography>
                  </Stack>
                 </Box>
                  <Box sx={{
                    padding:2
                  }}>
                  <Divider/>
                  <ButtonGroup variant='' fullWidth>
                    
                    <Button startIcon={<Interests/>}>Like</Button>
                    <Button startIcon={<Message/>} onClick={openClickHandler}>Comment</Button>
                    <Button startIcon={<Share/>}>Share</Button>
                  </ButtonGroup>
                  </Box>
                  <Typography variant='body2'> view more comments</Typography>
                  <Stack sx={{
                    margin:2
                  }} direction={'row'} spacing={1}>
                    <Avatar src={logo}/>
                    <Stack direction={'column'}>
                    <Box sx={{
                       backgroundColor:'rgba(207, 201, 201, 0.619)',
                      padding:'4px 10px',
                      borderRadius:'10px',
                    }}>
                      <Typography> this is the comment that from onather user</Typography>
                    </Box>
                    <Stack direction={'row'} spacing={1}>
                      <Typography variant='body2'>3d</Typography>
                      <Typography variant='body2'>Like</Typography>
                      <Typography variant='body2'>Reply</Typography>
                      <Typography variant='body2'>Share</Typography>  
                    </Stack>
                    </Stack>
                  </Stack>
                  <Stack direction={'row'} spacing={1}>    
                  </Stack>  
                  </Stack>       
         </CardContent>
    </Card>
           </DialogContentText>
       </DialogContent>
       <DialogActions>
       <Avatar src={logo}></Avatar>
                    <TextField variant='outlined' size='small' placeholder='write comment' aria-placeholder='write comment' sx={style.textField} InputProps={{
                endAdornment:<InputAdornment position="end"><Stack spacing={0.2} direction={'row'}><Message/> <EmojiEvents/> <Camera/><CircleNotifications/><CatchingPokemon/></Stack></InputAdornment>
            }}
            />      
       </DialogActions>
          </Dialog>
   </div>
    </>
      )
}

export default contentsPost
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
    }
  }