import { createBrowserRouter } from "react-router-dom";
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
import Documentation from "../pages/Documentation";
import FAQ from "../pages/Home/sections/FAQ";
import CookiePolicy from "../pages/Legal/CookiePolicy";
import SingleModelView from "../pages/ProjectModelView/SingleModelView";

// TODO: Fix layout/outlet issue
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error10 />,
    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <Home />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/about",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <About />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/events",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <Events />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/courses",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <TrainingProgram />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/projects",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <Projects />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/all-projects",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <SingleModelView />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/projects/:id",
    errorElement: <Error10 />,
    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <SingleProjectView />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/blog",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <BlogPage />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/blog/:slug",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <SinglePost />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/consultancy",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <RequestConsultation />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/career",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <Career />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/contact-us",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <ContactUs />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/documentation",
    errorElement: <Error10 />,

    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <Documentation />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/faq",
    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <FAQ />
        </BaseLayout>
      </Suspense>
    ),
  },
  {
    path: "/cookie-policy",
    element: (
      <Suspense fallback={<Spinners />}>
        <BaseLayout>
          <CookiePolicy />
        </BaseLayout>
      </Suspense>
    ),
  },
]);
