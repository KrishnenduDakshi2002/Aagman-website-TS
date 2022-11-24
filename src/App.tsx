import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BlogsPage } from "./BlogsPage/blogsPage";
import { CollaboratePage } from "./CollaboratePage/collaboratePage";
import { HeaderComponent } from "./components/header/header.component";
import { SideBar } from "./components/sideBar/sideBar";
import { CreateDiscussion } from "./DiscussionPage/components/CreateDiscussion/CreateDiscussion";
import { DiscussionHome } from "./DiscussionPage/components/DiscussionHome/DiscussionHome";
import { MyQuestions } from "./DiscussionPage/components/MyQuestions/MyQuestions";
import { DiscussionSideNav } from "./DiscussionPage/components/sidebar/sideNav";
import { DiscussionPage } from "./DiscussionPage/discussionPage";
import { EventCalendarPage } from "./eventCalendar/eventCalendarPage";
import EventPage from "./eventHomePage/homePage";

function App() {
  return (
    <div className="body">
      <HeaderComponent />
      <div className="container">
        <SideBar />
        <div className="pageContainer">
          {/* only this pages under routes will be change on re-rendering */}
          <Routes>
            {/* nested routes for event page */}
            <Route element={<EventPage />}>
              <Route index element={<EventPage />} />
            </Route>
            <Route element={<EventCalendarPage />}>
              <Route  path="/eventCalendar" element={<EventCalendarPage />} />
            </Route>
            <Route path="/discussion/*" element={<DiscussionPage/>}>
              <Route index element={<DiscussionHome/>}/>
              <Route path="create" element={<CreateDiscussion/>}/>
              <Route path="myQuestions" element={<MyQuestions/>}/>
            </Route>
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/collaborate" element={<CollaboratePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
