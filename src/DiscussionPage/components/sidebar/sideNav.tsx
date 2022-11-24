import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './sideNav.css'
export const DiscussionSideNav = () => {
  return (
      <div className="discussion__sideNav">
        <Link to='/discussion/create'>
          <div className="discussion__sideBar__btn">
            <AiOutlinePlusCircle size={35}/>
            <p>Create</p>
          </div>
        </Link>
        <Link to='/discussion'>
          <div className="discussion__sideBar__btn">
           <p>All Questions</p>
          </div>
        </Link>
        <Link to='/discussion/myQuestions'>
          <div className="discussion__sideBar__btn">
            <p>My Questions</p>
          </div>
        </Link>
      </div>
  )
}
