import React from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'
import { Context } from '../../../store/tabs'

const RolesListing = () => {
   const history = useHistory()
   const { state, dispatch } = React.useContext(Context)
   const addTab = () => {
      const hash = `untitled${uuid().split('-')[0]}`
      dispatch({
         type: 'ADD_TAB',
         payload: { title: hash, path: `/roles/${hash}` },
      })
      history.push(`/roles/${hash}`)
   }
   React.useEffect(() => {
      const tab = state.tabs.find(item => item.path === `/roles`) || {}
      if (!Object.prototype.hasOwnProperty.call(tab, 'path')) {
         history.push('/')
      }
   }, [history, state.tabs])
   return (
      <div>
         <h1>Roles Listing</h1>
         <button type="button" onClick={() => addTab()}>
            New Form
         </button>
      </div>
   )
}

export default RolesListing
