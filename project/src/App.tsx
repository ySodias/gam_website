import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Foooter';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <div>
    <Header />
        <BrowserRouter>
          <Routes>
            <Route path ='signin' element={<SignIn />} />
            <Route path = 'signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      <Footer />
  </div>
    
  )
};

export default App;
