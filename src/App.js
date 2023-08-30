import React, { Suspense } from "react";
import "./App.css";
import Loader from "./common/Loader/Loader";
import { Route, Routes } from "react-router";
import ProtectedRoute from "./helper/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";
const Home = React.lazy(() => import("./pages/Home"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Breathe = React.lazy(() => import("./pages/Breathe"));
const Meditate = React.lazy(() => import("./pages/Meditate"));
const ChatBot = React.lazy(() => import("./pages/ChatBot"));
const Account = React.lazy(() => import("./pages/User/Account"));
const UpdateAccount = React.lazy(() => import("./pages/User/UpdateAccount"));
const Resource = React.lazy(() => import("./pages/Resource"));
const SelectRoutine = React.lazy(() => import("./pages/SelectRoutine"));
const MusicPlayer = React.lazy(() => import("./pages/MusicPlayer"));
const FAQs = React.lazy(() => import("./pages/User/FAQs"));
const Journal = React.lazy(() => import("./pages/User/Journal"));
const RoutineHistory = React.lazy(() => import("./pages/User/RoutineHistory"));
const Blog = React.lazy(() => import("./pages/Blog"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/meditate" element={<Meditate />} />
          <Route path="/music-player/meditate" element={<MusicPlayer />} />

          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/breathe" element={<Breathe />} />
          <Route path="/music-player/breathe" element={<MusicPlayer />} />

          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/account" element={<Account />} />
          <Route path="/update-account" element={<UpdateAccount />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/routine-history" element={<RoutineHistory />} />
          {/* </Route> */}
          <Route path="/resource" element={<Resource />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/select-routine" element={<SelectRoutine />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
