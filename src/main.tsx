import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import App from './App.tsx'
import Services from './pages/Service.tsx'
//import Marketplace from './pages/Marketplace.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/About Us.tsx';
import Community from './pages/Community.tsx';
import LoginForm from "./components/Account/login-form.tsx"
import SignupForm from "./components/Account/signup-form.tsx"


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
      {/* path: '/Marketplace',
        element: <Marketplace />,
      */},
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
      {path:'/login-form',
      element: <LoginForm />,
    },
       {path:'/signup-form',
      element: <SignupForm />
      ,}
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

