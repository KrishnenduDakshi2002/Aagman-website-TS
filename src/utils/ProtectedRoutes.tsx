import React from 'react'
import { redirect } from 'react-router-dom'
export const ProtectedRoutes:React.FC<{children: JSX.Element}> = ({children}) => {

    // if user is not logged in redirect him to login page

    return children;
}
