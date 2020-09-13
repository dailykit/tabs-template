import React from 'react'
import { useParams } from 'react-router-dom'

import { useTabs } from '../../../store/tabs'

const UserForm = () => {
   const params = useParams()
   const { tab, addTab } = useTabs()
   React.useEffect(() => {
      if (!tab) {
         addTab(params.name, `/users/${params.name}`)
      }
   }, [tab, addTab, params.name])
   return (
      <div>
         <h1>User Form</h1>
         <span>{params.name}</span>
      </div>
   )
}

export default UserForm
