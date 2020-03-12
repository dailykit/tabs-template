import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { AuthProvider } from './store/auth'
import { TabProvider } from './store/tabs'

import './index.css'

ReactDOM.render(
   <AuthProvider>
      <TabProvider>
         <App />
      </TabProvider>
   </AuthProvider>,
   document.getElementById('root')
)
