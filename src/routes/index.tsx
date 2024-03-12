import {
  createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home/Home";
import { Suspense } from "react";
import Spinners from "../components/common/Spinner";
import Error10 from "../pages/NotFound";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import TrainingProgram from "../pages/Courses/Courses";
import Projects from "../pages/Projects/Projects";
import SingleProjectView from "../pages/SingleProjectView/SingleProjectView";
import BlogDetails from "../pages/Blog/Blog";

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
      {
        path: "/events",
        element: (
          <Suspense fallback={<Spinners />}>
            <Events />
          </Suspense>
        ),
      },
      {
        path: "/courses",
        element: (
          <Suspense fallback={<Spinners />}>
            <TrainingProgram />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Spinners />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/projects/:id",
        element: (
          <Suspense fallback={<Spinners />}>
            <SingleProjectView />
          </Suspense>
        ),
      },
      {
        path: "/blog/:id",
        element: (
          <Suspense fallback={<Spinners />}>
            <BlogDetails />
          </Suspense>
        ),
      },
    ],
  },
]);
