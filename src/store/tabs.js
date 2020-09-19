import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useWindowSize } from '../utils/hooks'

const Context = React.createContext()

const initialState = {
   isDropdownOpen: false,
   tabs: [],
}

const reducers = (state, { type, payload }) => {
   switch (type) {
      case 'SET_TITLE': {
         const { tabs } = state
         const index = tabs.findIndex(tab => tab.path === payload.path)
         tabs[index] = {
            ...tabs[index],
            title: payload.title,
         }
         return {
            ...state,
            tabs,
         }
      }
      case 'ADD_TAB': {
         const tabExists = state.tabs.find(tab => tab.path === payload.path)
         if (tabExists) {
            return state
         }
         return {
            ...state,
            tabs: [...state.tabs, { title: payload.title, path: payload.path }],
         }
      }
      // Delete Tab
      case 'DELETE_TAB': {
         return {
            ...state,
            tabs: state.tabs.filter((_, index) => index !== payload.index),
         }
      }
      case 'TOGGLE_DROPDOWN':
         return { ...state, isDropdownOpen: payload }
      case 'CLOSE_ALL_TABS':
         return {
            ...state,
            tabs: [],
         }
      default:
         return state
   }
}

export const TabProvider = ({ children }) => {
   const [state, dispatch] = React.useReducer(reducers, initialState)

   return (
      <Context.Provider value={{ state, dispatch }}>
         {children}
      </Context.Provider>
   )
}

export const useTabs = () => {
   const history = useHistory()
   const view = useWindowSize()
   const location = useLocation()

   const {
      state: { tabs, isDropdownOpen },
      dispatch,
   } = React.useContext(Context)

   const tab = tabs.find(node => node.path === location.pathname)

   const toggleDropdown = React.useCallback(
      value => dispatch({ type: 'TOGGLE_DROPDOWN', payload: value }),
      [dispatch]
   )

   const setTabTitle = React.useCallback(
      title => {
         dispatch({
            type: 'SET_TITLE',
            payload: {
               title,
               path: tab.path,
            },
         })
      },
      [tab, dispatch]
   )

   const addTab = React.useCallback(
      (title, path) => {
         dispatch({
            type: 'ADD_TAB',
            payload: { title, path },
         })
         history.push(path)
      },
      [history, dispatch]
   )

   const switchTab = path => history.push(path)

   const visibleTabs = tabs.slice(0, Math.floor(view.width / 280))
   const hiddenTabs = tabs.slice(Math.floor(view.width / 280))

   const removeTab = React.useCallback(
      ({ tab: node, index }) => {
         dispatch({ type: 'DELETE_TAB', payload: { tab: node, index } })

         const tabsCount = tabs.length
         // closing last remaining tab
         if (index === 0 && tabsCount === 1) {
            history.push('/')
         }
         // closing first tab when there's more than one tab
         else if (index === 0 && tabsCount > 1) {
            history.push(tabs[index + 1].path)
         }
         // closing any tab when there's more than one tab
         else if (index > 0 && tabsCount > 1) {
            history.push(tabs[index - 1].path)
         }
      },
      [history, dispatch, tabs]
   )

   const closeAllTabs = React.useCallback(() => {
      dispatch({ type: 'CLOSE_ALL_TABS' })
      switchTab('/')
   }, [switchTab, dispatch])

   return {
      tab,
      tabs,
      addTab,
      switchTab,
      removeTab,
      visibleTabs,
      hiddenTabs,
      setTabTitle,
      closeAllTabs,
      isDropdownOpen,
      toggleDropdown,
   }
}
