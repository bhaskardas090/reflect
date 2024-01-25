import React, { Suspense } from "react";
import "./App.css";
import Loader from "./common/Loader/Loader";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Breathe = React.lazy(() => import("./pages/Breathe"));
const Meditate = React.lazy(() => import("./pages/Meditate"));
const ChatBot = React.lazy(() => import("./pages/ChatBot"));
const SelectRoutine = React.lazy(() => import("./pages/extra/SelectRoutine"));
const MusicPlayer = React.lazy(() => import("./pages/MusicPlayer"));
const FAQs = React.lazy(() => import("./pages/extra/FAQs"));
const Journal = React.lazy(() => import("./pages/Journal"));
const RoutineHistory = React.lazy(() => import("./pages/extra/RoutineHistory"));

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditate" element={<Meditate />} />
            <Route path="/breathe" element={<Breathe />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/music-player/breathe" element={<MusicPlayer />} />
            <Route path="/music-player/meditate" element={<MusicPlayer />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/routine-history" element={<RoutineHistory />} />
            <Route path="/select-routine" element={<SelectRoutine />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
