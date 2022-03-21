import React from 'react';

//Lazy Loading for pages and components
export const SignUp = React.lazy(() => {
  return Promise.all([
    import('./pages/SignUp/SignUp'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const SignIn = React.lazy(() => {
  return Promise.all([
    import('./pages/SignIn/SignIn'),
    new Promise(resolve => setTimeout(resolve, 500))
  ])
  .then(([moduleExports]) => moduleExports);
});

export const Feed = React.lazy(() => {
  return Promise.all([
    import('./pages/Feed/Feed'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
  .then(([moduleExports]) => moduleExports);
});