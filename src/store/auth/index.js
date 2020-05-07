import React from 'react'
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
   realm: 'accounts',
   url: process.env.REACT_APP_KEYCLOAK_URL,
   clientId: 'dashboard',
   'ssl-required': 'none',
   'public-client': true,
   'bearer-only': false,
   'verify-token-audience': true,
   'use-resource-role-mappings': true,
   'confidential-port': 0,
})

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = React.useState(false)
   const [user, setUser] = React.useState({})
   const [isInitialized, setIsInitialized] = React.useState(false)

   const initialize = async () => {
      const authenticated = await keycloak.init({
         onLoad: 'login-required',
         promiseType: 'native',
      })
      if (authenticated) {
         setIsInitialized(true)
         setIsAuthenticated(authenticated)
         const profile = await keycloak.loadUserProfile()
         setUser(profile)
      }
   }

   React.useEffect(() => {
      initialize()
   }, [])

   const login = () => keycloak.login()
   const logout = () => keycloak.logout()

   return (
      <AuthContext.Provider
         value={{
            user,
            login,
            logout,
            isInitialized,
            isAuthenticated,
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => React.useContext(AuthContext)
