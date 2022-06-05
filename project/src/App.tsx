import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Foooter';
import Loading from './utils/Loading';
import { SignIn, SignUp, Feed, Menu } from './AppRoutes';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <div>
    <Suspense fallback={< Loading/>}>
    <Header />
        <BrowserRouter>
          <Routes>
            <Route path = 'feed' element={<Feed />} />
            <Route path ='signin' element={<SignIn />} />
            <Route path ='menu' element={<Menu />} />
            <Route path = '/' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </Suspense>
  </div>
  )
};

export default App;
