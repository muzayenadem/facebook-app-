import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
function NotificationMarketplace(props) {
  return (
   <Box>
    <Typography variant='h2'>
      {props.inform}
    </Typography>
   </Box>
  )
}

export default NotificationMarketplace