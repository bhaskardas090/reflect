import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import '../styles/UserPage.css';
import { useState } from 'react';
import testImage from '../assets/avatar.jpeg'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'; // Import InputAdornmentx
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';




const UserPage = () => {
    const [name, setName] = useState("");

    function handleChange(event) {
        const value = event.target.value;

        setName(value);

    }

    return (
        <div className='main'>
            <div className='container'>
                <div className='upperSection'>
                    <h1>Hello {name} !</h1>
                    <div className='icon'>
                        <Avatar
                            alt="Remy Sharp"
                            src={testImage}
                            sx={{ width: 120, height: 120 }}
                        />
                    </div>
                </div>
            </div>
            <div className="lowerSection">
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Birthday"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CakeIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Instagram Account"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InstagramIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        className='pass'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon style={{ color: '#6E83B7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Button variant="contained">Edit Profile</Button>
            </div>
        </div>
    )
}

export default UserPage

