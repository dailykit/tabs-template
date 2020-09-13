import React from 'react'
import { v4 as uuid } from 'uuid'
import { useTabs } from '../../../store/tabs'

const UsersListing = () => {
   const { tab, addTab } = useTabs()
   const createTab = () => {
      const hash = `untitled${uuid().split('-')[0]}`
      addTab(hash, `/users/${hash}`)
   }
   React.useEffect(() => {
      if (!tab) {
         addTab('Users', '/users')
      }
   }, [tab, addTab])
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
