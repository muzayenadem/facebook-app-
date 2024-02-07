import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import data from '../../../data/Data.js'
import React from 'react' 
import logo from "../../../pictures/br1.jpg" 


function ShowsVideos() {
  return (
   <Box sx={{ml:'5%'}}>
   {
    data.map((single, index)=>{
      return (
        <>
          <Link key={index} to={`${single.id}`} ><img  src={single.img}  style={{
      width:'200px',
      height:'200px',
      margin:'3px',
      borderRadius:'3%'
    }}></img>
    </Link> 
        </>
      )
    })
   }
   </Box>
  )
}

export default ShowsVideos
