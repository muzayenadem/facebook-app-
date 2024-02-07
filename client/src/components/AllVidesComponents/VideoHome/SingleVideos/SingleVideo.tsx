import { Box, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import eventComponent from '../../../../EventEmittter/EventComponent'
function SingleVideo() {
    const [dataHere,setDataHere] = useState('')
    useEffect(()=>{
      const listiner =  eventComponent.subscriber('DataFromData',(newData)=>{
            setDataHere(newData)
        })
        return ()=>{
            listiner
        }
    },[])
  return (
  <Box sx={{width:'100%'}}>
    <Card  sx={{width:{xs:'500px',sm:'600px',md:'1000px',xl:'1100px',xxl:'1200px'}}}>
    <CardContent>
        <Typography>{dataHere.name}</Typography>
        
    </CardContent>
    </Card>
  </Box>
  )
}

export default SingleVideo