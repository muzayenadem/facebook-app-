import React from 'react'
 import { useParams,Link,useNavigate,Pathname} from 'react-router-dom'
 import logo from '../../../pictures/br1.jpg'
 import dataSample from '../../../data/Data.js'
//   import data2 from '../../../data/Data.js'
 import { useState } from 'react'
//  import { parsePath } from 'react-router-dom'
import { Box, Button, Card, CardContent, Divider, Stack, Tab, Tabs, Typography } from '@mui/material'
import { FollowTheSigns, FollowTheSignsSharp, Message, MoreHoriz, Search } from '@mui/icons-material'
import LiveVideo from '../LiveVideo/LiveVideo'








// import { Typography } from '@mui/material'
function SingleShowVideos() {
 const [value, setValue] = useState(0)
   const changeHandler = (event, newValue) =>{
    setValue(newValue)
  }
const {videoId} = useParams()
console.log(videoId)

const video = dataSample.find((video)=> video.id ===parseInt(videoId))
 const {firstName,lastName,email,password,  title,id,img} = video
  return (
    <>
     <Card sx={{width:{xs:'600px',sm:'700px',md:'900px',xl:'1613px',}}}>
        <CardContent>
          <Box sx={{
            width:'85%',
            height:'auto',
            ml:'7%',
            mt:'3%',
            bgcolor:'blue',
            opacity:'0.8',
            color:'white',
            textAlign:'center',
            pt:'2%',
            borderRadius:'10px'
          }}>
            <Typography variant='h2' >{firstName}</Typography>
          </Box>
          <Box sx={{ml:'7%',display:{xs:'inline',xl:'flex'},flexWrap:'wrap',justifyContent:'space-between',width:'85%'}}>
            <Stack direction={{xs:'column',sm:'column',md:'column',xl:'row'}} spacing={3}>
            <img src={img} alt='no connection' style={{
                width:'100px',
                height:'100px',
                borderRadius:'50%'
            }}></img>
            <Box sx={{mt:'6%'}}>
                <Typography variant='h3'>{firstName} {lastName}</Typography>
                <Typography variant='h6'>{title}</Typography>
            </Box>
            </Stack>
            <Box sx={{mr:'5%',mt:'4%'}}>
                <Button size='medium' variant='contained' startIcon={<FollowTheSigns/>}>Follow</Button>
            </Box>
          </Box>
         <Divider/>

          <Box sx={{width:'76%',ml:'13%',mt:'2%', display:{xs:'inline',xl:'flex'},justifyContent:'space-between'}} >
            <Stack>
        <Tabs  value={value} onChange={changeHandler}>
              <Tab label='Home' sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} id="tab-1"/>
              <Tab label='Live' sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} id="tab-2"/>
              <Tab label='Videos' sx={{minWidth:{xs:'60px',width:'60px'}}}  id="tab-4"/>
              <Tab label='About' sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}}  id="tab-5"/>
              <Tab label='More' sx={{minWidth:{xs:'60px',md:'100px'},width:{xs:'60px',md:'100px'}}} id="tab-6"/>  
            </Tabs>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <Button variant='contained' color='secondary' startIcon={<FollowTheSignsSharp/>}>Follow</Button>
                <Button sx={{color:'black',bgcolor:'GrayText'}} startIcon={<Message/>}>Message</Button>
                <Button sx={{color:'black',bgcolor:'GrayText'}} startIcon={<Search/>}></Button>
                <Button color='secondary' sx={{bgcolor:'GrayText',color:'black'}} startIcon={<MoreHoriz/>}></Button>
            </Stack>
          </Box>
        </CardContent>
     </Card>
     <LiveVideo/>
    </>
  )
}

export default SingleShowVideos

const data = [
  {
      title:'new picture',
      id:1,
      img:'http://localhost:3001/images/file_1692893036437.jpg'
  },
  {
      title:'new picture',
      id:2,
      img:'http://localhost:3001/images/file_1692907211289.png'
  },
  {
      title:'new picture',
      id:3,
      img:'http://localhost:3001/images/file_1692904616729.png'
  },
  {
      title:'new picture',
      id:4,
      img:'http://localhost:3001/images/file_1692907211289.png'
  },
  {
      title:'new picture',
      id:5,
      img:'http://localhost:3001/images/file_1692893036437.jpg'
  },
  {
      title:'new picture',
      id:6,
      img:'http://localhost:3001/images/file_1692904616729.png'
  },
  {
      title:'new picture',
      id:7,
      img:'http://localhost:3001/images/file_1692893036437.jpg'
  },
  {
      title:'new picture',
      id:8,
      img:'http://localhost:3001/images/file_1692907211289.png'
  },
  {
      title:'new picture',
      id:9,
      img:'http://localhost:3001/images/file_1692904616729.png'
  },
  {
      title:'new picture',
      id:10,
      img:'http://localhost:3001/images/file_1692907211289.png'
  },
  {
      title:'new picture',
      id:11,
      img:'http://localhost:3001/images/file_1692904616729.png'
  },
  {
      title:'new picture',
      id:12,
      img:'http://localhost:3001/images/file_1692907211289.png'
  },
  {
      title:'new picture',
      img:'http://localhost:3001/images/file_1692904616729.png'
  },
  {
    title:'new picture',
    id:13,
    img:'http://localhost:3001/images/file_1692893036437.jpg'
},
{
    title:'new picture',
    id:15,
    img:'http://localhost:3001/images/file_1692907211289.png'
},
{
    title:'new picture',
    id:16,
    img:'http://localhost:3001/images/file_1692904616729.png'
},
{
    title:'new picture',
    id:17,
    img:'http://localhost:3001/images/file_1692907211289.png'
},
{
    title:'new picture',
    id:18,
    img:'http://localhost:3001/images/file_1692893036437.jpg'
},
{
    title:'new picture',
    id:19,
    img:'http://localhost:3001/images/file_1692904616729.png'
},
{
    title:'new picture',
    id:20,
    img:'http://localhost:3001/images/file_1692893036437.jpg'
},
{
    title:'new picture',
    id:21,
    img:'http://localhost:3001/images/file_1692907211289.png'
},
{
    title:'new picture',
    id:22,
    img:'http://localhost:3001/images/file_1692904616729.png'
},
{
    title:'new picture',
    id:23,
    img:'http://localhost:3001/images/file_1692907211289.png'
},
{
    title:'new picture',
    id:24,
    img:'http://localhost:3001/images/file_1692904616729.png'
},
{
    title:'new picture',
    id:25,
    img:'http://localhost:3001/images/file_1692907211289.png'
},
{
    title:'new picture',
    id:26,
    img:'http://localhost:3001/images/file_1692904616729.png'
},
{
  title:'new picture',
  id:27,
  img:'http://localhost:3001/images/file_1692893036437.jpg'
},
{
  title:'new picture',
  id:28,
  img:'http://localhost:3001/images/file_1692907211289.png'
},
{
  title:'new picture',
  id:29,
  img:'http://localhost:3001/images/file_1692904616729.png'
},
{
  title:'new picture',
  id:30,
  img:'http://localhost:3001/images/file_1692907211289.png'
},

]

