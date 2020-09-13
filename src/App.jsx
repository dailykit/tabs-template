import React from 'react'
import {useKeycloak} from '@react-keycloak/web'
import { BrowserRouter as Router } from 'react-router-dom'

// Sections
import Header from './sections/Header'
import Sidebar from './sections/Sidebar'
import Main from './sections/Main'

import { Loader } from './components'
import { StyledWrapper } from './styled'

const App = () => {
   const [keycloak, initialized] = useKeycloak()
   const [isSidebarVisible, toggleSidebar] = React.useState(false)

   if (!initialized) return <Loader />
   if (!keycloak.authenticated) return "You're not logged in!"
   return (
      <StyledWrapper>
         <Router>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar visible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <Main />
         </Router>
      </StyledWrapper>
   )
}

export default App
