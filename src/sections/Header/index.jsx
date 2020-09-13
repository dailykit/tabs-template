import React from 'react'
import { useHistory } from 'react-router-dom'

import { Tabs } from '../../components'
import { useTabs } from '../../store/tabs'
import { StyledHeader, StyledButton, StyledNav } from './styled'
import { MenuIcon, LeftIcon, RightIcon, HomeIcon } from '../../assets/icons'

const Header = ({ toggleSidebar }) => {
   const history = useHistory()
   const {switchTab} = useTabs()
   return (
      <StyledHeader>
         <StyledButton
            title="Menu"
            onClick={() => toggleSidebar(visible => !visible)}
         >
            <MenuIcon color="#000" size="24" />
         </StyledButton>
         <StyledButton
            title="Home"
            onClick={() => switchTab('/')}
         >
            <HomeIcon size="20" />
         </StyledButton>
         <StyledNav>
            <button
               type="button"
               title="Go Back"
               onClick={() => history.goBack()}
            >
               <LeftIcon color="#000" size="22" />
            </button>
            <button
               type="button"
               title="Go Foreward"
               onClick={() => history.goForward()}
            >
               <RightIcon color="#000" size="22" />
            </button>
         </StyledNav>
         <Tabs />
      </StyledHeader>
   )
}

export default Header
