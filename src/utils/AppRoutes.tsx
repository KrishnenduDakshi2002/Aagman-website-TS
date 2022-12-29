import React,{lazy, Suspense} from "react";
import { Route, Routes } from "react-router";
import { App } from "../App";
import { LazyLoad } from "./Lazyload";

// named export
const Login = LazyLoad('../Auth/Login/Login','Login');
const SignUp = LazyLoad('../Auth/SignUp/SignIn','SignUp');
const BlogsPage = LazyLoad('../BlogsPage/blogsPage','BlogsPage');
const CollaboratePage = LazyLoad("../CollaboratePage/collaboratePage",'CollaboratePage');
const CreateDiscussion = LazyLoad("../DiscussionPage/components/CreateDiscussion/CreateDiscussion",'CreateDiscussion');
const DiscussionHome =  LazyLoad("../DiscussionPage/components/DiscussionHome/DiscussionHome",'DiscussionHome');
const QuestionComponent =  LazyLoad("../DiscussionPage/components/DiscussionHome/components/QuestionComponent",'QuestionComponent');
const MyQuestions =  LazyLoad("../DiscussionPage/components/MyQuestions/MyQuestions",'MyQuestions');
const DiscussionPage = LazyLoad("../DiscussionPage/discussionPage",'DiscussionPage');
const EventCalendarPage =   LazyLoad("../eventCalendar/eventCalendarPage",'EventCalendarPage');
const EventHome =  LazyLoad("../eventHomePage/components/Home/EventHome",'EventHome');
const ProtectedRoutes = LazyLoad("./ProtectedRoutes",'ProtectedRoutes');

// default exports
const CreateEvent = LazyLoad("../eventHomePage/components/CreateEvent/CreateEvent",null);
const RegisteredEvents =  LazyLoad("../eventHomePage/components/RegisteredEvents/RegisteredEvents",null);
const EventPage = LazyLoad("../eventHomePage/homePage",null);
const HostedEvents = LazyLoad("../eventHomePage/components/HostedEvents/HostedEvents",null);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
