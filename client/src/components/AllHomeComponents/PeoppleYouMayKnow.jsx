//mport React from 'react'
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import logo from '../../pictures/br1.jpg'
import './PeoppleYouMayKnow.css'
import { PersonPin } from "@mui/icons-material"
function PeoppleYouMayKnow() {
  return (
    <Card sx={{mt:1,mb:1, width:{xs:'550px',sm:'550px',md:'550px'}}} >
        <CardContent>
            <div id='wrapper'>
                <Stack direction={'row'}></Stack>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>                     
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography variant="body2">
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button>
                    </CardContent>
                </Card>
               </div>
               <div id="item">
                <Card>
                    <CardContent>
                        <CardMedia component={'img'}
                        width={'100%'}
                        height={'100%'}
                        image={logo}
                        alt="no connection"
                        />
                        <Typography  sx={{fontSize:'0.1rem'}}>
                            Muhammed Abdellaa
                        </Typography>
                            <Button size='small' autoCapitalize='samll' startIcon={<PersonPin/>} variant='outlined' color='secondary'> Add friend </Button> 
                    </CardContent>
                </Card>
               </div>
            </div>
         </CardContent>
    </Card>
  )
}

export default PeoppleYouMayKnow