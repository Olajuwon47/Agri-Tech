import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/*import Home from './pages/Home'
import Contact from './pages/Contact'
import App from './App.tsx'
import Services from './pages/Service.tsx'
import Marketplace from './pages/marketplace.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/About Us.tsx';
import Community from './pages/Community.tsx';
import LoginForm from "./pages/Account/login-form.tsx"
import SignupForm from "./pages/Account/signup-form.tsx"
import Account from './pages/Account/account.tsx';
import ProfileSetup from './pages/Account/Profile.tsx';*/

// Lazy imports
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Service.tsx'));
const Marketplace = lazy(() => import('./pages/marketplace.tsx'));
const AboutUs = lazy(() => import('./pages/About Us.tsx'));
const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community.tsx'));
const LoginForm = lazy(() => import('./pages/Account/login-form.tsx'));
const SignupForm = lazy(() => import('./pages/Account/signup-form.tsx'));
const Account = lazy(() => import('./pages/Account/account.tsx'));
const ProfileSetup = lazy(() => import('./pages/Account/Profile.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/Services',
        element: <Services />,
      },
      {
        path: '/Marketplace',
        element: <Marketplace />,
      },
      {
        path: '/About Us',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {path: '/Community',
      element: <Community />,
      },
 
    ],
    
  },
       {path:'/login-form',
      element: <LoginForm />,
    },
       {path:'/signup-form',
      element: <SignupForm />
      ,},
      {path:'/account',
      element: <Account />,
      },
      {path:'/Profile',
      element: <ProfileSetup />,
      },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

