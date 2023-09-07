import React, { Suspense } from "react";
import "./App.css";
import Loader from "./common/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./helper/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";
import useAuthContext from "./hooks/useAuthContext";
const Home = React.lazy(() => import("./pages/Home"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Breathe = React.lazy(() => import("./pages/Breathe"));
const Meditate = React.lazy(() => import("./pages/Meditate"));
const ChatBot = React.lazy(() => import("./pages/ChatBot"));
const Account = React.lazy(() => import("./pages/user/Account"));
const UpdateAccount = React.lazy(() => import("./pages/user/UpdateAccount"));
const Resource = React.lazy(() => import("./pages/extra/Resource"));
const SelectRoutine = React.lazy(() => import("./pages/extra/SelectRoutine"));
const MusicPlayer = React.lazy(() => import("./pages/MusicPlayer"));
const FAQs = React.lazy(() => import("./pages/extra/FAQs"));
const Journal = React.lazy(() => import("./pages/Journal"));
const RoutineHistory = React.lazy(() => import("./pages/extra/RoutineHistory"));
const Blog = React.lazy(() => import("./pages/extra/Blog"));

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <div className="App">
          <Suspense fallback={<Loader />}>
            {/* <HashRouter> */}
            <Routes>
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/meditate" element={<Meditate />} />
                <Route path="/breathe" element={<Breathe />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/music-player/breathe" element={<MusicPlayer />} />
                <Route
                  path="/music-player/meditate"
                  element={<MusicPlayer />}
                />

                <Route path="/account" element={<Account />} />
                <Route path="/update-account" element={<UpdateAccount />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/routine-history" element={<RoutineHistory />} />
                <Route path="/resource" element={<Resource />} />
                <Route path="/blogs/:id" element={<Blog />} />
                <Route path="/select-routine" element={<SelectRoutine />} />
              </Route>
            </Routes>
            {/* </HashRouter> */}
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
