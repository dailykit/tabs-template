import React from 'react'

const Context = React.createContext()

const initialState = {
   tabs: [],
}

const reducers = (state, { type, payload }) => {
   switch (type) {
      // Add Tab
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
      default:
         return state
   }
}

export { Context, initialState, reducers }
