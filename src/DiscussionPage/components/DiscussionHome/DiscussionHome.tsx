import React from 'react'
import { SearchBar } from '../../../components/searchBar/searchBar.component';
import { QuestionComponent } from './components/QuestionComponent';
import { QuestionTile } from './components/questionTile';
import './DiscussionHome.css';
export const DiscussionHome = () => {
  return (
    <div className='discussion__home__parent__container'>
      <div className="discussion__home__quesions__wrapper">
        <div className="discussion__home__quesions__header">
          <SearchBar placeholder='Search Questions'/>
        </div>
        <div className="discussion__home__quesions__container">
          <QuestionTile/>
          <QuestionTile/>
          <QuestionTile/>
          <QuestionTile/>
          <QuestionTile/>
        </div>
      </div>
      <div className="discussion__home__side__container">
        <QuestionComponent/>
      </div>
    </div>
  )
}
