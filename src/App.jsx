import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "../src/App.css"
import { AppLayout } from "./Component/Layout/AppLayout";
import { Home } from "./pages/Home"
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./Component/Layout/CountryDetails";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
      path: "/WorldInfo",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "country",
      element: <Country/>
    },
    {
      path: "country/:id",
      element: <CountryDetails/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={router}>
     </RouterProvider>
    </>
  )
}

export default App
