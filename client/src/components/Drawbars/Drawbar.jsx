import { Box, Button, Drawer, Typography } from '@mui/material'
import  { useState,useEffect } from 'react'
import eventComponent from '../../EventEmittter/EventComponent'
function Drawbar() {
    const [open, setOpen] = useState(false)
    const [mee,setMee] = useState('ishii')
    useEffect(()=>{
     const emitter =  eventComponent.subscriber('ReturnFunction',(data)=>{
          if(data.isFrom == 'Addition'){
            setOpen(data.isTrue)
          }
       ///    alert('jjsjj')
       
     setMee(data.isFrom)
     });
         return ()=>{
          emitter
         }
    },[]);
    const changeHandler = ()=>{
        setOpen(false)
        //alert('sss')
    }
  return (<>
    <Drawer open={open} anchor='right'>
        <Box>
            <Typography onClick={()=> setOpen(false)}  variant='h2'>
                may be
            </Typography>
            <Button variant='filled' onClick={changeHandler}>Change here</Button>
        </Box>
        <Typography variant='h3'>{mee}</Typography>
        <Box p={2} width={'250px'} textAlign='center' role='presentarion'>
            <Typography component={'dev'} variant="h6">THE MAIN SIDE MENI BAR</Typography>
        </Box>
    </Drawer>
    </>
  )
}
export default Drawbar