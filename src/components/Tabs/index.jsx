import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

// State
import { Context } from '../../store/tabs'

// Styled
import { StyledTabs, StyledTab } from './styled'

// Icons
import { CloseIcon } from '../../assets/icons'

const Tabs = () => {
   const history = useHistory()
   const location = useLocation()
   const { state, dispatch } = React.useContext(Context)

   const switchTab = path => history.push(path)

   const removeTab = (e, { tab, index }) => {
      e.stopPropagation()
      dispatch({ type: 'DELETE_TAB', payload: { tab, index } })

      const tabsCount = state.tabs.length
      // closing last remaining tab
      if (index === 0 && tabsCount === 1) {
         history.push('/')
      }
      // closing first tab when there's more than one tab
      else if (index === 0 && tabsCount > 1) {
         history.push(state.tabs[index + 1].path)
      }
      // closing any tab when there's more than one tab
      else if (index > 0 && tabsCount > 1) {
         history.push(state.tabs[index - 1].path)
      }
   }
   return (
      <StyledTabs>
         {state.tabs.map((tab, index) => (
            <StyledTab
               key={tab.title}
               onClick={() => switchTab(tab.path)}
               active={tab.path === location.pathname}
            >
               <span title={tab.title}>{tab.title}</span>
               {tab.path === location.pathname && (
                  <div
                     role="button"
                     tabIndex={0}
                     title="Close Tab"
                     onClick={e => removeTab(e, { tab, index })}
                     onKeyPress={e =>
                        e.charCode === 32 && removeTab(e, { tab, index })
                     }
                  >
                     <CloseIcon color="#000" size="20" />
                  </div>
               )}
            </StyledTab>
         ))}
      </StyledTabs>
   )
}

export default Tabs
