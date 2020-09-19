import React from 'react'
import { useLocation } from 'react-router-dom'

import { useTabs } from '../../store/tabs'
import { StyledTabs, StyledTab, Dropdown, Button, CloseAll } from './styled'
import { CloseIcon, ChevronDownIcon, ChevronUpIcon } from '../../assets/icons'

const Tabs = () => {
   const {
      tabs,
      closeAllTabs,
      isDropdownOpen,
      toggleDropdown,
      visibleTabs = [],
   } = useTabs()

   return (
      <>
         <StyledTabs onClick={() => toggleDropdown(false)}>
            {visibleTabs.map((tab, index) => (
               <Tab key={tab.path} tab={tab} index={index} />
            ))}
         </StyledTabs>
         <Button onClick={() => toggleDropdown(!isDropdownOpen)}>
            {isDropdownOpen ? (
               <ChevronUpIcon size={20} />
            ) : (
               <ChevronDownIcon size={20} />
            )}
         </Button>
         {isDropdownOpen && (
            <Dropdown onClick={() => toggleDropdown(false)}>
               <ul>
                  {tabs.map((tab, index) => (
                     <Tab
                        tab={tab}
                        index={index}
                        key={tab.path}
                        className="in_dropdown"
                     />
                  ))}
               </ul>
               <CloseAll type="button" onClick={closeAllTabs}>
                  Close all tabs
               </CloseAll>
            </Dropdown>
         )}
      </>
   )
}

export default Tabs

const Tab = ({ index, tab, ...props }) => {
   const location = useLocation()
   const { switchTab, removeTab } = useTabs()

   return (
      <StyledTab
         key={tab.title}
         onClick={() => switchTab(tab.path)}
         active={tab.path === location.pathname}
         {...props}>
         <span title={tab.title}>{tab.title}</span>
         <button
            type="button"
            title="Close Tab"
            onClick={e => {
               e.stopPropagation()
               removeTab({ tab, index })
            }}>
            <CloseIcon color="#000" size="20" />
         </button>
      </StyledTab>
   )
}
