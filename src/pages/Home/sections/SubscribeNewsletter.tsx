// import {  useState } from "react";
// import { Link } from "react-router-dom";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../js/firebase";
// import { AlertDanger, AlertSuccess } from "../../../components/alerts";

export default function SubscribeNewsletter() {
  // const [email, setEmail] = useState("");
  // const [submitSuccess, setSubmitSuccess] = useState(false);
  // const [submitError, setSubmitError] = useState(false);

  // const handleSubscribe = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   // Regular expression for a simple email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   // Check if the email follows a valid format
  //   if (!emailRegex.test(email)) {
  //     // If not, display an error message and return
  //     setSubmitError(true);
  //     setTimeout(() => {
  //       setSubmitError(false);
  //     }, 3500);
  //     return;
  //   }

  //   try {
  //     // Add the email to Firestore
  //     await addDoc(collection(db, "subscribers"), { email });

  //     console.log("Subscription successful!");

  //     // You can reset the email field after a successful subscription if needed
  //     setEmail("");

  //     setSubmitSuccess(true);
  //     setTimeout(() => setSubmitSuccess(false), 3500);
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error("Error subscribing user:", error.message);
  //     } else {
  //       console.error("Error subscribing user:", error);
  //     }
  //     setSubmitError(true);
  //     setTimeout(() => setSubmitError(false), 3500);
  //   }
  // };

  // const handleChangeEmail = (e: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setEmail(e.target.value);
  // };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-md">
      {/* bg-secondary-background */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center flex items-center justify-center">
          {/* <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">
            Stay Updated with Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements and
            exclusive updates only to JHUB Newsletter Subscribers.
          </p> */}
          <iframe
            src="https://jhubafrica.substack.com/embed"
            width="480"
            height="320"
            // style={{ border: "1px solid #EEE", background: "#F6F9FF" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
          {/* <form>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-black dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block outline-none p-5 pl-10 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChangeEmail}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubscribe}
                  className="bg-[#219653] border-y-black border-r-black py-5 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data. We will never spam you.
              <Link
                to="/jhub-privacy"
                className="font-medium text-meta-3 dark:text-primary-500 hover:underline"
              >
                {" "}
                Read our Privacy Policy
              </Link>
              .
            </div>

            {submitSuccess && <AlertSuccess />}
            {submitError && (
              <AlertDanger moreAlertInfo="Either wrong email format or Our backend systems are down" />
            )}
          </form> */}
        </div>
      </div>
    </section>
  );
}
