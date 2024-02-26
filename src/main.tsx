import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        success: {
          style: {
            background: "#289643",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
        },
        error: {
          style: {
            background: "#E5352B",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
        },
      }}
    />
  </React.StrictMode>
);
