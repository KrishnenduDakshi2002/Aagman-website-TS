import React from "react";
import { Route, Routes } from "react-router";
import { App } from "../App";
import { Login } from "../Auth/Login/Login";
import { SignUp } from "../Auth/SignUp/SignIn";
import { BlogsPage } from "../BlogsPage/blogsPage";
import { CollaboratePage } from "../CollaboratePage/collaboratePage";
import { CreateDiscussion } from "../DiscussionPage/components/CreateDiscussion/CreateDiscussion";
import { DiscussionHome } from "../DiscussionPage/components/DiscussionHome/DiscussionHome";
import { MyQuestions } from "../DiscussionPage/components/MyQuestions/MyQuestions";
import { DiscussionPage } from "../DiscussionPage/discussionPage";
import { EventCalendarPage } from "../eventCalendar/eventCalendarPage";
import EventPage from "../eventHomePage/homePage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* ************************************************ Login page routes *************************************************/}
      <Route path="/login" element={<Login />} />
      {/* ************************************************ Signup page routes *************************************************/}
      <Route path="/signup" element={<SignUp />} />
      {/* ************************************************ Events page routes *************************************************/}
      <Route
        path="/events"
        element={
          <App>
            <EventPage />
          </App>
        }
      />
      {/* ************************************************ Event calendar page routes *************************************************/}
      <Route
        path="/eventCalendar"
        element={
          <App>
            <EventCalendarPage />
          </App>
        }
      />
      {/* ************************************************ Discussion page routes *************************************************/}
      <Route path="/discussion/*">
        <Route
          index
          element={
            <App>
              <DiscussionPage>
                <DiscussionHome />
              </DiscussionPage>
            </App>
          }
        />
        <Route
          path="create"
          element={
            <App>
              <ProtectedRoutes>
                <DiscussionPage>
                  <CreateDiscussion />
                </DiscussionPage>
              </ProtectedRoutes>
            </App>
          }
        />
        <Route
          path="myQuestions"
          element={
            <App>
              <ProtectedRoutes>
                <DiscussionPage>
                  <MyQuestions />
                </DiscussionPage>
              </ProtectedRoutes>
            </App>
          }
        />
      </Route>
      {/* ************************************************ Blog page routes *************************************************/}
      <Route
        path="/blogs"
        element={
          <App>
            <BlogsPage />
          </App>
        }
      />
      <Route
        path="/collaborate"
        element={
          <App>
            <CollaboratePage />
          </App>
        }
      />
    </Routes>
  );
};
