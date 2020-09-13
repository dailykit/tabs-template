import React from 'react'
import { v4 as uuid } from 'uuid'
import { useTabs } from '../../../store/tabs'

const RolesListing = () => {
   const { tab, addTab } = useTabs()
   const createTab = () => {
      const hash = `untitled${uuid().split('-')[0]}`
      addTab(hash, `/roles/${hash}`)
   }
   React.useEffect(() => {
      if (!tab) {
         addTab('Roles', '/roles')
      }
   }, [tab, addTab])
   return (
      <div>
         <h1>Roles Listing</h1>
         <button type="button" onClick={() => createTab()}>
            New Form
         </button>
      </div>
   )
}

export default RolesListing
