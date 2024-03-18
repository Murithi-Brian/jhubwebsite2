"use client";

// import { SetStateAction,useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
} from "@tabler/icons-react";

// import { Link } from "react-router-dom";
// import { db } from "../../js/firebase";
// import { addDoc, collection } from "firebase/firestore";
// import { AlertDanger, AlertSuccess } from "../../components/alerts";

function ContactUs() {
//   const [contactSubmitted, setContactSubmitted] = useState(false);
//   const [contactFailed, setContactFailed] = useState(false);

//   /********** FORM STATES ********/
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [country, setCountry] = useState("");
//   const [message, setMessage] = useState("");

//   const [formData, setFormData] = useState({
//     FullName: fullName,
//     email: email,
//     companyName: companyName,
//     country: country,
//     message: message,
//   });

//   const handleContactJHUB = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     try {
//       // Save the form data to Firestore
//       const docRef = await addDoc(
//         collection(db, "contactFormSubmissions"),
//         formData
//       );

//       // TODO: Handle success (show a success message, redirect, etc.)
//       setContactSubmitted(true);
//       console.log("successful");

//       // Clear the form after successful submission
//       setFormData({
//         FullName: "",
//         email: "",
//         companyName: "",
//         country: "",
//         message: "",
//       });

//       // RESET THE ALERT
//       setTimeout(() => {
//         setContactSubmitted(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Error adding document: ", error);

//       // TODO: Handle error (show an error message, log, etc.)
//       setContactFailed(true);

//       // RESET THE ALERT
//       setTimeout(() => {
//         setContactFailed(false);
//       }, 5000);
//     }
//   };

//   const handleFullNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setFullName(e.target.value);
//   };

//   const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setEmail(e.target.value);
//   };

//   const handleCompanyNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setCompanyName(e.target.value);
//   };

//   const handleCountryChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setCountry(e.target.value);
//   };

//   const handleMessageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
//     setMessage(e.target.value);
//   };

  return (
    <div className="w-full border-stroke dark:border-strokedark">
      <div className="w-full flex flex-col flex-wrap items-center justify-center mb-12 h-full">
        {/* Contact Info */}
        <div className="md:w-1/2 lg:w-1/3 w-full md:pr-8 h-full">
          <div className="w-full shadow rounded py-12 lg:px-28 px-8 h-full">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-main">
              Reach Us via:
            </p>
            <div className="mt-8">
              <p className="text-base font-semibold leading-none text-gray-800">
                Address:
              </p>
              <p>P.O. BOX 62000-00200, Nairobi Kenya.</p>

              <p className="text-base font-semibold leading-none text-gray-800 mt-4">
                Email:
              </p>
              <p className="text-success">info.jhub@jkuat.ac.ke</p>
              <p className="text-base font-semibold leading-none text-gray-800 mt-4">
                Social Media:
                <div className="space-x-4 mt-2 flex justify-start items-center">
                  <a href="https://twitter.com/JHUBAfrica" target="_blank">
                    <IconBrandTwitter />{" "}
                  </a>
                  <a
                    href="https://www.facebook.com/people/JHUB-Africa/61554202584585/"
                    target="_blank"
                  >
                    <IconBrandFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jhubafrica/"
                    target="_blank"
                  >
                    <IconBrandLinkedin />
                  </a>

                  <a href="https://www.tiktok.com/@jhubafrica" target="_blank">
                    <IconBrandTiktok />
                  </a>
                  <a
                    href="https://www.instagram.com/jhubafrica/"
                    target="_blank"
                  >
                    <IconBrandInstagram />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        {/* <div className="md:w-1/2 lg:w-2/3 w-full md:pl-8 mt-4 md:mt-0">
          <div className="w-full  shadow rounded py-12 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Contact The JHUB Team.
            </p>
            <div className="md:flex items-center mt-12 w-full">
              <div className="w-full flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Full Name
                </label>
                <input
                  tabIndex={0}
                  aria-label="Enter first & last name"
                  type="text"
                  name="name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Enter four First & last name"
                />
              </div>
              <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  aria-label="Please input email address"
                  type="email"
                  name="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  aria-label="Please input company name"
                  type="text"
                  name="Company Name"
                  value={companyName}
                  onChange={handleCompanyNameChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <input
                  tabIndex={0}
                  aria-label="Please input country name"
                  type="text"
                  name="Country"
                  value={country}
                  onChange={handleCountryChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  value={message}
                  onChange={handleMessageChange}
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  placeholder="Write Your Message Here..."
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-black mt-4 flex items-center justify-start gap-1">
              We respond to all feedbacks.
            </p>
            <div className="flex items-center justify-center w-full">
              <button
                onClick={handleContactJHUB}
                className="mt-9 text-base w-full font-semibold leading-none text-white py-4 px-10 bg-main rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
              >
                Get in Touch
              </button>
            </div>
          </div>
          {contactSubmitted && <AlertSuccess />}

          {contactFailed && <AlertDanger />}
        </div> */}
      </div>
    </div>
  );
}

export default ContactUs;
