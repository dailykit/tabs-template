import React from 'react'
import { useLocation } from 'react-router-dom'

import { useTabs } from '../../store/tabs'
import {useWindowSize} from '../../utils/hooks'
import { StyledTabs, StyledTab, Dropdown, Button } from './styled'
import { CloseIcon, ChevronDownIcon, ChevronUpIcon } from '../../assets/icons'

const Tabs = () => {
   const view  = useWindowSize()
   const { tabs, isDropdownOpen, toggleDropdown } = useTabs()

   return (
      <>
         <StyledTabs>
            {tabs.slice(0, Math.floor(view.width / 280)).map((tab, index) => (
               <Tab key={tab.path} tab={tab} index={index} />
            ))}
         </StyledTabs>
         <Button onClick={() => toggleDropdown(!isDropdownOpen)}>
            {isDropdownOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
         </Button>
         {isDropdownOpen && (
            <Dropdown>
               <ul>
                  {tabs.slice(Math.floor(view.width / 280)).length > 0 ? (
                     tabs
                        .slice(Math.floor(view.width / 280))
                        .map((tab, index) => (
                           <Tab
                              tab={tab}
                              index={index}
                              key={tab.path}
                              className="in_dropdown"
                           />
                        ))
                  ) : (
                     <p>No tabs</p>
                  )}
               </ul>
            </Dropdown>
         )}
      </>
   )
}

export default Tabs

const Tab = ({ index, tab, ...props }) => {
   const location = useLocation()
   const { switchTab, removeTab, toggleDropdown } = useTabs()

   return (
      <StyledTab
         key={tab.title}
         onClick={() => {
            switchTab(tab.path)
            toggleDropdown(false)
         }}
         active={tab.path === location.pathname}
         {...props}
      >
         <span title={tab.title}>{tab.title}</span>
         <button
            title="Close Tab"
            onClick={e => {
               e.stopPropagation()
               removeTab({ tab, index })
            }}
         >
            <CloseIcon color="#000" size="20" />
         </button>
      </StyledTab>
   )
}