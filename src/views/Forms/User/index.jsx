import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { useTabs } from '../../../store/tabs'

const UserFomr = () => {
   const params = useParams()
   const history = useHistory()
   const [data, setData] = React.useState({})
   const { tabs, doesTabExists } = useTabs()
   React.useEffect(() => {
      const tab = doesTabExists(`/users/${params.name}`)
      if (Object.prototype.hasOwnProperty.call(tab, 'path')) {
         return setData(tab)
      }
      return history.push('/users')
   }, [tabs, params.name, history, doesTabExists])
   return (
      <div>
         <h1>User Form</h1>
         <span>{data.title}</span>
      </div>
   )
}

export default UserFomr
