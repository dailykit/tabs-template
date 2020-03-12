## DailyOS App Template

This template comes pre configured with tabs management, styled components and @dailykit/ui with structured folders.

### Installation

1. When creating a new repository, select this template to bootstrap you app.
2. Install the packages:
   -  With NPM
      `npm install`
   -  With Yarn
      `yarn`

### Project Structure

```
src
|
+-- views
|   --- Forms
|   |   +-- Role
|   |   +-- User
|   --- Listings
|   |   +-- RoleListing
|   |   +-- UserListing
|   --- Home
|   |   +-- index.jsx
```

All your forms goes inside `Forms` folder and similarly all the listing pages goes inside `Listings` folder. `Home` folder is where you can list different listing cards.

In order to add a new form, copy the existing form folder and update the `/users` path to the path you want to use and repeat the same in Listing pages as well.

For each listing/form page you'll have to create `Route` component for that path. Go into `sections/Main/index.jsx` file and add a Route component.

```js
// For Listing
<Route path="/users" exact> // Your path here
   <UsersListing /> // The page to render at that path
</Route>

// For Form
<Route path="/roles/:name"> // Your path here in place of 'roles'
   <RoleForm /> // Form page to render at that path
</Route>
```

### Adding Authentication

To add authentication to your app, follow the following steps:

1. Wrap your app with `AuthProvider`

```js
import { AuthProvider } from './store/auth'

ReactDOM.render(
   <AuthProvider>
      <App />
   </AuthProvider>,
   document.getElementById('root')
)
```

2. To access user profile, methods like login, logout etc, use the hook `useAuth`

```js
import { useAuth } from './store/auth'

const App = () => {
   const { isAuthenticated, isInitialized } = useAuth()

   if (isInitialized === false) return <Loader />
   if (isAuthenticated === false) return "You're not logged in!"
   return <StyledWrapper>{/* You're app code */}</StyledWrapper>
}
```

3. `useAuth` hook gives you access to following methods and booleans

| props           | type     | description                                      |
| :-------------- | :------- | :----------------------------------------------- |
| user            | Object   | Contains user's profile details                  |
| login           | Function | Method to initiate login                         |
| logout          | Function | Method to logout user and redirect to login page |
| clearToken      | Function | Method to clear stored tokens                    |
| updateToken     | Function | Method to update the token                       |
| isInitialized   | Boolean  | Check whether keycloak is initiliazed or not     |
| isTokenExpired  | Boolean  | Check whether the token is expired or not        |
| isAuthenticated | Boolean  | Check if the user is authenticated or not        |
