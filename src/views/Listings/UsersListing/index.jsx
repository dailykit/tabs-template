import React from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'
import { useTabs } from '../../../store/tabs'

const UsersListing = () => {
   const history = useHistory()
   const { tabs, addTab } = useTabs()
   const createTab = () => {
      const hash = `untitled${uuid().split('-')[0]}`
      addTab(hash, `/users/${hash}`)
   }
   React.useEffect(() => {
      const tab = tabs.find(item => item.path === `/users`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, tabs])
   return (
      <div>
         <h1>Users Listing</h1>
         <button type="button" onClick={() => createTab()}>
            New Form
         </button>
      </div>
   )
}

export default UsersListing
