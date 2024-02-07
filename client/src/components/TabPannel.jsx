import { Box } from '@mui/material'
//import React from 'react'

function TabPannel(props) {
    const {children} = props
    const {value} = props
    const {index} = props
  return (
  <div 
  hidden={value  !== index}
  id={`simple-tab${index}`}>
    {value === index && (
        <Box sx={{mt:4}}>
            {children}
        </Box>
    )}
  </div>
  )
}

export default TabPannel