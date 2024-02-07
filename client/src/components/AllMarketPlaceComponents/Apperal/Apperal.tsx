import { Box, Typography } from '@mui/material'
import React from 'react'

function Apperal(props) {
  return (
   <Box>
    <Typography variant='h2'>{props.inform}</Typography>
   </Box>
  )
}

export default Apperal