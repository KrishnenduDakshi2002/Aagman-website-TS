import React from 'react'
import { RouteContext } from './CurrentRouteContext';
import { HeaderSearchContext } from './headerSearch.context';
import { LoginContext } from './LoginContext';

export const AppContext = ({children}: {children: JSX.Element}) => {
  return (
    <HeaderSearchContext>
      <LoginContext>
        <RouteContext>
          {children}
        </RouteContext>
      </LoginContext>
    </HeaderSearchContext>
  )
}
