import React from 'react'
import { DiscussionSideNav } from './components/sidebar/sideNav'

import './discussionPage.css'
export const DiscussionPage:React.FC<{children : JSX.Element}> = ({children}) => {
  return (
    <div className="discussionPage__root">
      {/* left side nav */}
      <div className="discussionPage__navigation">
        <DiscussionSideNav/>
      </div>
      <div className="discussionPage__middleSection">
        {children}
      </div>
    </div>
  )
}
