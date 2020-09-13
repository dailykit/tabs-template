import React from 'react'

// State
import { useTabs } from '../../store/tabs'

// Styled
import { StyledSidebar, StyledList, StyledListItem } from './styled'

const Sidebar = ({ visible, toggleSidebar }) => {
   const { addTab } = useTabs()
   return (
      <StyledSidebar visible={visible} onClick={() => toggleSidebar(false)}>
         <StyledList>
            <StyledListItem onClick={() => addTab('Roles', '/roles')}>
               Roles
            </StyledListItem>
            <StyledListItem onClick={() => addTab('Users', '/users')}>
               Users
            </StyledListItem>
         </StyledList>
      </StyledSidebar>
   )
}

export default Sidebar
