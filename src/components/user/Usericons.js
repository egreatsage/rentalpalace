import { Mail, Notifications } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import {useValue} from '../../context/ContextProvider'


const Usericons = () => {
    const {state:{currentUser}} = useValue()
  return (
   <Box>
    <IconButton size='large' color='inherit'>
        <Badge color='error' badgeContent={5}>
             <Mail/>
        </Badge>
    </IconButton>
 
    <IconButton size='large' color='inherit'>
        <Badge color='error' badgeContent={20}>
             <Notifications/>
        </Badge>
    </IconButton>
        <Tooltip title='open User Settings'>
        <IconButton>
            <Avatar src={currentUser?.photoURL} 
            alt={currentUser?.name}>
                {currentUser?.name.charAt(0).toUpperCase()}
            </Avatar>
        </IconButton>
    </Tooltip> 
   </Box>

  )
}

export default Usericons