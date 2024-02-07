import { Box, Typography } from '@mui/material'
import React from 'react'

function FreeStuff(props) {
  return (
    <Box>
    <Typography variant='h2'>{props.inform}</Typography>
   </Box>
  )
}

export default FreeStuff