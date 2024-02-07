import { Link,useNavigate,useLocation } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


import {useSelector,useDispatch} from 'react-redux'
import { fetchToken } from '../../Feutures/loggedInAuthSlice'

function Login() {
    const [emailOrPhone,setEmailOrPhone] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    // dispatching
    const dipatch = useDispatch()
    useEffect(()=>{
      dipatch(fetchToken())
    },[])

    const token = useSelector((state)=> state.token.token)
    const loginClickHandler = async() =>{

       await axios.post('http://localhost:9910/login',{emailOrPhone,password})
        .then(result=>{
            console.log(result.data)
            navigate(`/home/${emailOrPhone}`)
            
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
 

  return (
    <>
     <Box sx={{
        display:"flex",
        flexWrap:'wrap',
        width:'60%',
        ml:'15%',
        mt:'10%',
        height:'45vh',
        justifyContent:'space-between'
    }}>
        <Stack sx={{mt:'7%'}}> 
            <Typography sx={{color:'blue',}} variant='h3'>
                Facebook
            </Typography>
            <Typography variant='h5'>
                Connect with frinds and the world around you
            </Typography>
        </Stack>
        <Stack>
            <Card sx={{
                width:'400px',
                height:'auto'
            }}>
                <CardContent>
                    <TextField 
                    sx={{width:'100%',m:'1'}} 
                    placeholder='Email or phone number'
                    onChange={(e)=>setEmailOrPhone(e.target.value)}
                    />
                    <TextField 
                    sx={{width:'100%',mt:'10px'}} 
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </CardContent>
                <CardActions>
                    <Button fullWidth variant='contained' onClick={loginClickHandler}>Login</Button>
                    </CardActions>
                       <Typography sx={{
                        ml:'25%'
                       }}>
                      <Link 
                        to={'/outpage/forgetpassword'}
                        variant='body2' style={{
                            color:'blue',
                            ml:'20%',
                            mb:'5%',
                            textAlign:'center',
                        }}>forget password ?</Link>
                          </Typography> 
                        <Box sx={{mt:3}}>
                        <Divider/>
                        </Box>
                         <Button sx={{ml:'26%',mt:3.5,mb:3.5}} size='medium' variant='contained' color='success' ><Link style={{textDecorationLine:'none'}} to={'/outpage/signup'}>  Create New Account </Link></Button>
            </Card>
            <Typography variant='body2' sx={{ml:5,mt:2}}><strong>Create a Page</strong> for a celebrity. brand or business</Typography>
        </Stack>
    </Box>
    </>
  )
}

export default Login