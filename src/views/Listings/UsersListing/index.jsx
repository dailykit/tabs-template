import React from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'
import { Context } from '../../../store/tabs'

const UsersListing = () => {
   const history = useHistory()
   const { state, dispatch } = React.useContext(Context)
   const addTab = () => {
      const hash = 'untitled' + uuid().split('-')[0]
      dispatch({
         type: 'ADD_TAB',
         payload: { title: hash, path: `/users/${hash}`, history },
      })
   }
   React.useEffect(() => {
      const tab = state.tabs.find(tab => tab.path === `/users`) || {}
      if (!tab.hasOwnProperty('path')) {
         history.push('/')
      }
   }, [history, state.tabs])
   return (
      <div>
         <h1>Users Listing</h1>
         <button onClick={() => addTab()}>New Form</button>
      </div>
   )
}

export default UsersListing
