import React from 'react'
import { HeaderSearchContext } from './headerSearch.context'

export const AppContext = ({children}: {children: JSX.Element}) => {
  return (
    <HeaderSearchContext>
        {children}
    </HeaderSearchContext>
  )
}
