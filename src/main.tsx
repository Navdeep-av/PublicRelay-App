import { createRoot } from 'react-dom/client'
// import LoginPage from './LoginPage.jsx'
import ArticlePage from "./pages/ArticlePage"
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserDetailsContext from "./context/UserContext"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/articles",
    element: <ArticlePage/>
  }
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(
  <UserDetailsContext>
    <RouterProvider router={router} />
  </UserDetailsContext>
);