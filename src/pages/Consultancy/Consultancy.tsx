import { SetStateAction, useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../js/firebase";
import { AlertSuccess, AlertDanger } from "../../components/alerts";

const RequestConsultation = () => {
  const [consultancyService, setConsultancyService] =
    useState("Product Suite Call");
  const [mainProductFocus, setMainProductFocus] = useState("JHUB Integrations");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ventureName: "",
    numberOfEmployees: "",
    email: "",
    // consultancyService: '',
    // mainProductFocus: '',
    interests: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFailed, setFormFailed] = useState(false);

  // Handle change for Consultancy Service dropdown
  const handleConsultancyServiceChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(consultancyService);
    setConsultancyService(e.target.value);
  };

  // Handle change for Main Product of Focus dropdown
  const handleMainProductFocusChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(mainProductFocus, e.target.value);
    setMainProductFocus(e.target.value);
  };

  // Handle change for first name input
  const handleFirstNameChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      firstName: e.target.value,
    }));
  };

  // Handle change for last name input
  const handleLastNameChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      lastName: e.target.value,
    }));
  };

  // Handle change for venture name input
  const handleVentureNameChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      ventureName: e.target.value,
    }));
  };

  // Handle change for number of employees input
  const handleNumberOfEmployeesChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfEmployees: e.target.value,
    }));
  };

  // Handle change for email input
  const handleEmailChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  // Handle change for interests input
//   const handleInterestsChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       interests: e.target.value,
//     }));
//   };

  // Handle change for message input
  const handleMessageChange = (e: { target: { value: string; }; }) => {
    setFormData((prevData) => ({
      ...prevData,
      message: e.target.value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Save the form data to Firestore
    //   const docRef = await addDoc(
    //     collection(db, "consultancyFormSubmissions"),
    //     {
    //       ...formData,
    //       consultancyService: consultancyService,
    //       mainProductFocus: mainProductFocus,
    //     }
    //   );
      // Handle success (show a success message, redirect, etc.)
      setFormSubmitted(true);

      // Clear the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        ventureName: "",
        numberOfEmployees: "",
        email: "",
        // consultancyService: '',
        // mainProductFocus: '',
        interests: "",
        message: "",
      });

      // Remove the success message after 5 seconds (adjust the timeout as needed)
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);

      // Handle error (show an error message, log, etc.)
      setFormFailed(true);

      // Remove the error message after 5 seconds (adjust the timeout as needed)
      setTimeout(() => {
        setFormFailed(false);
      }, 5000);
    }
  };

  return (
    <div className="md:w-[80%] m-auto py-10">
      {" "}
      {/**grid grid-cols-1 gap-9 sm:grid-cols-2 */}
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              JHUB Africa | Request Consulation
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    First name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={handleFirstNameChange}
                    placeholder="Enter your first name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={handleLastNameChange}
                    placeholder="Enter your last name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name Of Your Venture <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  value={formData.ventureName}
                  onChange={handleVentureNameChange}
                  placeholder="Enter name of Your Farm or whatever.."
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              {/* TODO Dropdowns - Utilize basic components from shadcn */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Number of Employees <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleNumberOfEmployeesChange}
                  placeholder="Enter name of Your Farm or whatever.."
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              {/* Size of the Biz :: What You Actually Farm ...etc */}

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email <span className="text-meta-1">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Select Consultancy Service.{" "}
                  <span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={consultancyService}
                    onChange={handleConsultancyServiceChange}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="">Product Suite Call</option>
                    <option value="">Farm Management</option>

                    <option value="">Production Yields</option>
                    <option value="">Legal Service</option>
                    <option value="">Other</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  What is Your Main Product of Focus?{" "}
                  <span className="text-meta-1">*</span>
                </label>
                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={mainProductFocus}
                    onChange={handleMainProductFocusChange}
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="">JHUB Integrations</option>
                    <option value="">Farm Management</option>
                    <option value="">Training Program</option>
                    <option value="">Other</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">
                  What are Your Interests with JHUB?{" "}
                  <span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your message"
                  name="message"
                  value={formData.message}
                  onChange={handleMessageChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>

              <button className="flex w-full justify-center rounded bg-main p-3 font-medium text-white hover:bg-white hover:text-main hover:cursor-pointer hover:border">
                Request Consultancy
              </button>
            </div>
          </form>
        </div>
        {formSubmitted && (
          <AlertSuccess
            moreAlertInfo="Form submitted successfully."
            alertText="Success!"
          />
        )}

        {formFailed && (
          <AlertDanger
            alertText="Error"
            moreAlertInfo="Error submitting the form. Please try again"
          />
        )}
      </div>
    </div>
  );
};

export default RequestConsultation;
