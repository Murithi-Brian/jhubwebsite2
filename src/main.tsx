import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import CookieConsent from "react-cookie-consent";
import Content from "./components/common/CookieContent/Content";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      declineButtonText="Decline"
      cookieName="JHUB_Africa_Cookie_Consent"
      style={{ background: "rgba(14, 37, 87, 0.9)", flexDirection: "column" }}
      buttonStyle={{
        padding: "6px 16px",
        color: "#fff",
        backgroundColor: "#219653",
        borderRadius: 6,
      }}
      declineButtonStyle={{
        padding: "6px 16px",
        color: "#219653",
        backgroundColor: "transparent",
        borderRadius: 6,
        border: "1px solid #219653",
        marginLeft: "40px",
      }}
      contentStyle={{ flex: "", padding: "0 40px" }}
      expires={30}
      acceptOnScroll={true}
      acceptOnScrollPercentage={25}
    >
      <Content />
    </CookieConsent>
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
