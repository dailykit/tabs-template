import React from 'react'
import { useParams } from 'react-router-dom'

import { useTabs } from '../../../store/tabs'

const RoleForm = () => {
   const params = useParams()
   const { tab, addTab } = useTabs()

   React.useEffect(() => {
      if (!tab) {
         addTab(params.name, `/roles/${params.name}`)
      }
   }, [tab, addTab, params.name])

   return (
      <div>
         <h1>Role Form</h1>
         <span>{params.name}</span>
      </div>
   )
}

export default RoleForm
