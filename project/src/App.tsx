import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Foooter';
import Loading from './utils/Loading';

export interface IApplicationProps {}

//Lazy Loading for pages and components
const SignUp = React.lazy(() => {
  return Promise.all([
    import('./pages/SignUp/SignUp'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

const SignIn = React.lazy(() => {
  return Promise.all([
    import('./pages/SignIn/SignIn'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <div>
    <Suspense fallback={< Loading/>}>
    <Header />
        <BrowserRouter>
          <Routes>
            <Route path ='signin' element={<SignIn />} />
            <Route path = 'signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </Suspense>
  </div>
  )
};

export default App;
