import React from 'react'
import {Menu,Lock} from '@mui/icons-material'
import {AppBar,Toolbar,Container, Box, IconButton,Button, Typography} from '@mui/material'
import photoURL from '../profile.jpg'
import Usericons from './user/Usericons'
import { useValue } from '../context/ContextProvider'
import {dispatch} from '../context/ContextProvider'
const user = {name:'test', photoURL}
const NavBar = () => {
      const {state:{currentUser}} = useValue()
  return (
   <AppBar>
     <Container maxWidth='lg'>
        <Toolbar dissableGutters>
          <Box sx={{mr:1}}>
            <IconButton size='large' color='inherit'>
                <Menu color='black' />
            </IconButton>
          </Box>
          <Typography variant='h6'
          component='h1'
          noWrap
          sx={{flexGrow:1, display:{xs:'none',md:'flex'} }}>
            You Are Welcome
          </Typography>
          <Typography variant='h6'
          component='h1'
          noWrap
          sx={{flexGrow:1, display:{xs:'flex',md:'none'} }}>
          9
          </Typography>
          {!currentUser ? (
          <Button color='inherit' startIcon={<Lock/>} 
          onClick={()=>dispatch({type:'UPDATE_USER', payload:user})}> 
            Login
            </Button>
            ):
          ( 
            <Usericons />
          )}
        
        </Toolbar>

     </Container>
   </AppBar>
  )
}

export default NavBar