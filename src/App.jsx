import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Sections
import Header from './sections/Header'
import Sidebar from './sections/Sidebar'
import Main from './sections/Main'

// Components
import { Loader } from './components'

// Utils
import { useAuth } from './store/auth'

// Styled
import { StyledWrapper } from './styled'

const App = () => {
   const { isAuthenticated, isInitialized } = useAuth()
   const [isSidebarVisible, toggleSidebar] = React.useState(false)

   if (isInitialized === false) return <Loader />
   if (isAuthenticated === false) return "You're not logged in!"
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
