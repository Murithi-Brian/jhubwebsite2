import {
  createBrowserRouter,
} from "react-router-dom";
import BaseLayout from "../components/common/BaseLayout";
import Home from "../pages/Home/Home";
import { Suspense } from "react";
import Spinners from "../components/common/Spinner";
import Error10 from "../pages/NotFound";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import TrainingProgram from "../pages/Courses/Courses";
import Projects from "../pages/Projects/Projects";
import SingleProjectView from "../pages/SingleProjectView/SingleProjectView";
import BlogPage from "../pages/Blog/Blog";
import RequestConsultation from "../pages/Consultancy";
import Career from "../pages/Career/Career";
import SinglePost from "../pages/Blog/SinglePost";
import ContactUs from "../pages/ContactUs";
// info.jhub@jkuat.ac.ke
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
        path: "/blog",
        element: (
          <Suspense fallback={<Spinners />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<Spinners />}>
            <SinglePost />
          </Suspense>
        ),
      },
      {
        path: "/consultancy",
        element: (
          <Suspense fallback={<Spinners />}>
            <RequestConsultation />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<Spinners />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Spinners />}>
            <ContactUs />
          </Suspense>
        ),
      },
    ],
  },
]);
