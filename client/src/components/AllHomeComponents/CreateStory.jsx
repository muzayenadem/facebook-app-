//import React from 'react'
import { AccessTime, Message, Person, SpeakerGroup } from "@mui/icons-material"
import { Card, CardContent, Tabs,Tab, Typography, Stack, Box } from "@mui/material"
import { useState } from "react"
import TabPannel from "../TabPannel"

function CreateStory() {
    const [value,setValue] = useState(0)
    const changeHandler = (event,newVlaue)=>{
        setValue(newVlaue)
    }
  return (
   <Card sx={{
    width:{xs:'500px',sm:'550px',md:'550px'}
   }}>
    <CardContent>
        <Tabs variant='fullWidth' value={value} onChange={changeHandler}>
            <Tab label='Story' id='tab-1'/>
            <Tab  label='Video' id='tab-1'/>
        </Tabs>
        <TabPannel value={value} index={0}>
          <Stack direction={'row'} spacing={8}>
               <Card>
                <Box sx={{width:'0px',height:'0px',boxSizing:'border-box' }} component={'icon'}>
                <Person sx={{width:'210px',height:'130px'}}/>
                <Typography sx={{ml:4}} variant="h4">
             Create Story
                </Typography>
               </Box> 
              </Card>
            <Stack sx={{display:{xs:'none',md:'block'}}} spacing={4}>
                 <Stack direction={'row'} spacing={3}>
                <SpeakerGroup/>
                <Typography variant="body2">Share everyday moments with friends and family</Typography>
               </Stack>
                <Stack direction={'row'} spacing={3}>
                <AccessTime/>
                <Typography variant="body2">Stories disappear after 24 hours</Typography>
               </Stack>
               <Stack direction={'row'} spacing={3}>
                <Message/>
                <Typography variant="body2">Replies and reactions are private</Typography>
               </Stack>
            </Stack>
        </Stack>
        </TabPannel >
        <TabPannel  value={value} index={1}>
            <Typography variant="h3">
                Vide
            </Typography>
        </TabPannel>
    </CardContent>
   </Card>
  )
}

export default CreateStory