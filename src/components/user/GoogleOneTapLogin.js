import { Google } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import {useValue} from '../../context/ContextProvider'
const GoogleOneTapLogin = () => {

  const {dispatch} = useValue()
  const [disabled, setDisabled] = useState(false)

  const handleResponse =(response)=>{
    console.log(response)
  }
  const handleGoogleLogin =()=>{
    setDisabled(true)
    try{
      window.google.accounts.id.initialize(
        {client_id: process.env.REACT_APP_GOOGLE_ID,
        callback:handleResponse
      }
      )
      window.google.accounts.id.prompt((notification)=>{
        if(notification.isNotDisplayed()){
          throw new Error('Try to clear Cookies or try again later')
        }
        if(notification.isSkippedMoment() || notification.isDismissedMoment()){
          setDisabled(false)
        }
      })
    }
      catch(error){
          dispatch({type:"UPDATE_ALERT", payload:{open:true, severity:'error',message:error.message},
          })
          console.log(error)
      }
    
  }
  return (
   <Button variant='outlined'
   startIcon={<Google/> }
   disabled={disabled} onClick={handleGoogleLogin}>
          Login With Google
   </Button>
  )
}

export default GoogleOneTapLogin