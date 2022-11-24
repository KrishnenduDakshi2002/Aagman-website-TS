import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { CreateDiscussion } from './components/CreateDiscussion/CreateDiscussion'
import { DiscussionHome } from './components/DiscussionHome/DiscussionHome'
import { MyQuestions } from './components/MyQuestions/MyQuestions'
import { DiscussionSideNav } from './components/sidebar/sideNav'

import './discussionPage.css'
export const DiscussionPage = () => {
  console.log('rendering discussionpage')
  return (
    <div className="discussionPage__root">
      {/* left side nav */}
      <div className="discussionPage__navigation">
        <DiscussionSideNav/>
      </div>
      <div className="discussionPage__middleSection">
        <Routes>
          <Route index element={<DiscussionHome/>}/>
          <Route path="create" element={<CreateDiscussion/>}/>
          <Route path="myQuestions" element={<MyQuestions/>}/>
        </Routes>
      </div>
    </div>
  )
}
