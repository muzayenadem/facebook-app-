import { Box, Button, Card, CardContent, CardHeader, Divider, FormControl, FormControlLabel, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Singup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate,setBirthDate] = useState('Year')
    const [gender,setGender] = useState(0)


    const [month,SetMonth] = useState('Month')
    const [day,SetDay] = useState('Day')
   
    // console.log(year)
  const navigate = useNavigate()
    const  signUpClickHandler = async () => {
        try {


        const data = {
            fname:firstName,
            lname:lastName,
            phone:emailOrPhone,
            password:password,
            date:birthDate,
            gender:gender
        }
        const sendingData = {
            firstName,
            lastName,
            emailOrPhone,
            password,
            birthDate,
            gender
        }
await axios.post('http://localhost:9910/register',sendingData)
navigate('/home')
console.log(data)
        } catch (error) {
            console.log(error)
        }

        // console.log(data)
        
        // .then(result =>{
        //     console.log(result)
        // })
        // .catch(err =>{
        //     console.log(err.message)
        // })
    }

  return (
   <Box sx={{ml:'35%',width:'450px'}}>
    <Typography variant='h2' sx={{fontFamily:'revert', textAlign:'center'}} color={'blue'}>
        Facebook
    </Typography>
    <Card sx={{width:'450px'}}>
        
            <Typography  variant='h5' sx={{
                fontWeight:600,
                textAlign:'center'
            }}>
                Create a new account
            </Typography>
            <Typography  variant='body2' sx={{
                textAlign:'center'
            }}>
                it's quick and easy
            </Typography>
            <Divider/>
        <CardContent>
         <Box>
            <Stack sx={{m:1}} direction={'row'} spacing={2}>
                <TextField 
                size='small' 
                placeholder='First Name'
                onChange={(e)=>setFirstName(e.target.value)}
                />
                <TextField 
                size='small' 
                placeholder='Last Name' 
                onChange={(e)=>setLastName(e.target.value)}
                />
            </Stack>
            <TextField 
            size='small' 
            fullWidth placeholder='Mobile number or email'
            onChange={(e)=>setEmailOrPhone(e.target.value)}
            />
            <TextField 
            size='small' 
            sx={{mt:1}} 
            fullWidth 
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
            />
        <Typography sx={{mt:1}} variant='body2'>birthday?</Typography>
         <Stack direction={'row'} spacing={2}>
         {/* <TextField 
         select 
         value={month} 
         placeholder={month}
         onChange={(e)=> SetMonth(e.target.value)}
         >
                <MenuItem value='september'>September</MenuItem>
                <MenuItem value='october'>October</MenuItem>
                <MenuItem value='November'>November</MenuItem>
                <MenuItem value='december'> December</MenuItem>
                <MenuItem value='january'>january</MenuItem>
                <MenuItem value='febrayr'>Febrary</MenuItem>
                <MenuItem value='march'>March</MenuItem>
                <MenuItem value='april'>April</MenuItem>
                <MenuItem value='may'>May</MenuItem>
                <MenuItem value='june'>June</MenuItem>
                <MenuItem value='july'>July</MenuItem>
                <MenuItem value='august'>August</MenuItem>
                
         </TextField>
         <TextField 
         select 
         value={day} 
         onChange={(e)=> SetDay(e.target.value)}
         >
            <MenuItem value='eth'>Ethiopia</MenuItem>
            <MenuItem value='sept'>September</MenuItem>
                <MenuItem value='oct'>October</MenuItem>
                <MenuItem value='Nov'>November</MenuItem>
         </TextField> */}
         <TextField 
         value={birthDate}
         type='date'
         fullWidth
         onChange={(e)=> setBirthDate(e.target.value)}
         >

         </TextField>
       
         </Stack>
         <Typography sx={{mt:2}} variant='body2'>Gender?</Typography>
        <Stack>
           

        <Box>
    <FormControl>
      <FormLabel id="job">gender</FormLabel>
    <RadioGroup 
    name="jobs" 
    aria-labelledby="job"
    onChange={(e)=> setGender(e.target.value)}
    >
        <Stack direction={'row'} spacing={2}>
     <Button sx={{ bgcolor:'white',color:'black',opacity:'0.7'}} size='small' variant='contained'> <FormControlLabel control={<Radio/>} label='Female' value='female'/></Button>
     <Button sx={{ bgcolor:'white',color:'black',opacity:'0.7'}} size='small' variant='contained'> <FormControlLabel control={<Radio/>} label='Male' value='male'/></Button>
     <Button sx={{ bgcolor:'white',color:'black',opacity:'0.7'}} size='small' variant='contained'> <FormControlLabel control={<Radio/>} label='Custom' value='custom'/></Button>
     </Stack>
    </RadioGroup>
    </FormControl>
   </Box>
        </Stack>
        <Typography sx={{mt:2,fontSize:'small'}}  variant='body2'>people who use our service may have uploaded your contact information to facebook. <Link>Learn More</Link></Typography>
        <Typography sx={{mt:2,fontSize:'x-small'}} variant='body2'>By clicking Singn Up. you agree to our Terms, Privacy,Policy and Cookies policy. you may recieve SMS Notifications from us and can opt out any time</Typography>
        <Button sx={{width:'50%',ml:'25%',mt:2}} color='success' variant='contained' onClick={signUpClickHandler} >Sign Up</Button>
         <Typography sx={{ml:'24%',mb:0,mt:2}}><Link to={'/outpage/login'}>Already have an account?</Link></Typography>
         </Box>
        </CardContent>
    </Card>
   </Box>
  )
}

export default Singup