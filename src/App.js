import React, {Suspense} from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Breathe = React.lazy(() => import('./pages/Breathe'));
const Meditate = React.lazy(() => import('./pages/Meditate'));
const ChatBot = React.lazy(() => import('./pages/ChatBot'));
const Account = React.lazy(() => import('./pages/Account'));
const Resource = React.lazy(() => import('./pages/Resource'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/breathe' element={<Breathe />} />
        <Route path='/meditate' element={<Meditate />} />
        <Route path='/chatbot' element={<ChatBot />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
