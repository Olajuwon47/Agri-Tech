import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoaderIcon } from "lucide-react";
import { cn } from "./lib/utils.ts"

// Lazy imports
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Service.tsx'));
const Marketplace = lazy(() => import('./pages/marketplace.tsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.tsx'));
const Contact = lazy(() => import('./pages/Contact'));
const Community = lazy(() => import('./pages/Community.tsx'));
const LoginForm = lazy(() => import('./pages/Account/login-form.tsx'));
const SignupForm = lazy(() => import('./pages/Account/signup-form.tsx'));
const Account = lazy(() => import('./pages/Account/account.tsx'));
const ProfileSetup = lazy(() => import('./pages/Account/Profile.tsx'));


// Spinner component
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-11 animate-spin text-green-600", className)}
      {...props}
    />
  );
}

export function SpinnerCustom() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <Spinner />
      <span className="ml-2 text-gray-700 font-medium">Loading...</span>
    </div>
  );
}

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
    <Suspense fallback={<SpinnerCustom />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);

