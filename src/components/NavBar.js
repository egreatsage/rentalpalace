import React from 'react'
import {Menu,Lock} from '@mui/icons-material'
import {AppBar,Toolbar,Container, Box, IconButton,Button, Typography} from '@mui/material'
import Usericons from './user/Usericons'
import { useValue } from '../context/ContextProvider'



const NavBar = () => {
      const {state:{currentUser},
           dispatch
    } = useValue()
  return (
   <AppBar>
     <Container maxWidth='lg'>
        <Toolbar>
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
          <Button color='inherit' startIcon={<Lock/>}  onClick={()=> dispatch({type:'OPEN_LOGIN'})}> 
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