import {
  createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home/Home";
import { Suspense } from "react";
import Spinners from "../utils/Spinner";
import Error10 from "../pages/NotFound";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <Error10 />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinners />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinners />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);
