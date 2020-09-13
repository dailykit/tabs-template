import React from 'react'
import ReactDOM from 'react-dom'
import { KeycloakProvider as AuthProvider } from '@react-keycloak/web';

import App from './App'

import { keycloak } from './lib/keycloak'
import { TabProvider } from './store/tabs'

import './index.css'
import 'tailwindcss/dist/base.min.css'

ReactDOM.render(
   <AuthProvider
      keycloak={keycloak}
      initConfig={{
         onLoad: 'login-required'
      }}
   >
      <TabProvider>
         <App />
      </TabProvider>
   </AuthProvider>,
   document.getElementById('root')
)
