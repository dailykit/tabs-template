import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTabs } from '../../../store/tabs'

const UsersListing = () => {
   const history = useHistory()
   const { tabs } = useTabs()
   React.useEffect(() => {
      const tab = tabs.find(item => item.path === `/users`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, tabs])
   return (
      <div>
         <h1>Users Listing</h1>
      </div>
   )
}

export default UsersListing
