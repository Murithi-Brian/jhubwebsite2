// Uncomment these if you want Firebase functionality
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../../js/firebase";
// import { AlertDanger, AlertSuccess } from "../../../components/alerts";

export default function SubscribeNewsletter() {
  // Uncomment the below code to re-enable Firebase functionality
  // const [email, setEmail] = useState("");
  // const [submitSuccess, setSubmitSuccess] = useState(false);
  // const [submitError, setSubmitError] = useState(false);

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setSubmitError(true);
  //     setTimeout(() => setSubmitError(false), 3500);
  //     return;
  //   }

  //   try {
  //     await addDoc(collection(db, "subscribers"), { email });
  //     setEmail("");
  //     setSubmitSuccess(true);
  //     setTimeout(() => setSubmitSuccess(false), 3500);
  //   } catch (error) {
  //     console.error("Error subscribing user:", error);
  //     setSubmitError(true);
  //     setTimeout(() => setSubmitError(false), 3500);
  //   }
  // };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-md">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center flex items-center justify-center">
          <iframe
            src="https://jhubafrica.substack.com/embed"
            width="480"
            height="320"
            frameBorder="0"
            scrolling="no"
            title="Subscribe to JHUB Newsletter"
          ></iframe>
          {/* Uncomment the form below to enable the Firebase subscription form */}
          {/* 
          <form>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium dark:text-gray-300">Email address</label>
                <input
                  className="block outline-none p-5 pl-10 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <Link to="/jhub-privacy" className="font-medium text-meta-3 dark:text-primary-500 hover:underline"> Read our Privacy Policy</Link>.
            </div>
            {submitSuccess && <AlertSuccess />}
            {submitError && <AlertDanger moreAlertInfo="Either wrong email format or our backend systems are down" />}
          </form> 
          */}
        </div>
      </div>
    </section>
  );
}
