import React from "react";
import { Route, Routes } from "react-router";
import { App } from "../App";
import { Login } from "../Auth/Login/Login";
import { SignUp } from "../Auth/SignUp/SignIn";
import { BlogsPage } from "../BlogsPage/blogsPage";
import { CollaboratePage } from "../CollaboratePage/collaboratePage";
import { CreateDiscussion } from "../DiscussionPage/components/CreateDiscussion/CreateDiscussion";
import { QuestionComponent } from "../DiscussionPage/components/DiscussionHome/components/QuestionComponent";
import { DiscussionHome } from "../DiscussionPage/components/DiscussionHome/DiscussionHome";
import { MyQuestions } from "../DiscussionPage/components/MyQuestions/MyQuestions";
import { DiscussionPage } from "../DiscussionPage/discussionPage";
import { EventCalendarPage } from "../eventCalendar/eventCalendarPage";
import CreateEvent from "../eventHomePage/components/CreateEvent/CreateEvent";
import { EventHome } from "../eventHomePage/components/Home/EventHome";
import HostedEvents from "../eventHomePage/components/HostedEvents/HostedEvents";
import RegisteredEvents from "../eventHomePage/components/RegisteredEvents/RegisteredEvents";
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
      <Route path="/">
        <Route
          index
          element={
            <App>
              <EventPage>
                <EventHome/>
              </EventPage>
            </App>
          }
        />
        <Route
          path="/create-event"
          element={
            <App>
              <ProtectedRoutes>
                <EventPage>
                  <CreateEvent/>
                </EventPage>
              </ProtectedRoutes>
            </App>
          }
        />
        <Route
          path="/registered-events"
          element={
            <App>
              <ProtectedRoutes>
                <EventPage>
                  <RegisteredEvents/>
                </EventPage>
              </ProtectedRoutes>
            </App>
          }
        />
        <Route
          path="/hosted-events"
          element={
            <App>
              <ProtectedRoutes>
                <EventPage>
                  <HostedEvents/>
                </EventPage>
              </ProtectedRoutes>
            </App>
          }
        />
      </Route>
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
        <Route
          path="question/:questionId"
          element={
            <App>
              <DiscussionPage>
                <QuestionComponent />
              </DiscussionPage>
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
