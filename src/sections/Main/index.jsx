import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Views
import { Home, UsersListing } from '../../views'

const Main = () => {
   return (
      <main>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
            <Route path="/users" exact>
               <UsersListing />
            </Route>
         </Switch>
      </main>
   )
}

export default Main
