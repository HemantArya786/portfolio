import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Index /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
    //   v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
)
