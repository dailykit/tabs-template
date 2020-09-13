import React from 'react'
import ReactDOM from 'react-dom'
import { KeycloakProvider as AuthProvider } from '@react-keycloak/web'

import 'tailwindcss/dist/base.min.css'
import './index.css'

import App from './App'
import { keycloak } from './lib/keycloak'
import { TabProvider } from './store/tabs'

ReactDOM.render(
   <AuthProvider
      keycloak={keycloak}
      initConfig={{
         onLoad: 'login-required',
      }}>
      <TabProvider>
         <App />
      </TabProvider>
   </AuthProvider>,
   document.getElementById('root')
)
