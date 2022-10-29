
import {createRoot} from 'react-dom/client'
import App from './App'
import ContextProvider from './context/ContextProvider'


const Root(document.getElementById('root')).render(
  <ContextProvider>
              <App/>
  </ContextProvider>
  
  

)
