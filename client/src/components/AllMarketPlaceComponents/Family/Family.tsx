import { Box, Typography } from '@mui/material'
import React from 'react'

function Family(props) {
  return (
    <Box>
    <Typography variant='h2'>{props.inform}</Typography>
   </Box>
  )
}

export default Family