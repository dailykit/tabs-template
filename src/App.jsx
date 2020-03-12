import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Context, initialState, reducers } from './store/tabs'

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
   const [state, dispatch] = React.useReducer(reducers, initialState)
   const [isSidebarVisible, toggleSidebar] = React.useState(false)

   if (isInitialized === false) return <Loader />
   if (isAuthenticated === false) return "You're not logged in!"
   return (
      <StyledWrapper>
         <Context.Provider value={{ state, dispatch }}>
            <Router>
               <Header toggleSidebar={toggleSidebar} />
               <Sidebar
                  visible={isSidebarVisible}
                  toggleSidebar={toggleSidebar}
               />
               <Main />
            </Router>
         </Context.Provider>
      </StyledWrapper>
   )
}

export default App
