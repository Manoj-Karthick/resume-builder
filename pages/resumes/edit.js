import { useState } from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function ResumeEditPage(props) {
  const [content, setContent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // const grammarlyClient = process.env.GRAMMARLY_CLIENT_ID;

  // console.log(grammarlyClient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setContent({ ...content, [name]: value });
  };

  return (
    <div className="container mx-auto bg-white lg:flex px-1">
      {/* left panel */}
      <div className="my-4 flex flex-col space-y-4 w-full lg:w-1/2">
        {/* Personal Details */}
        <div className="m-2 border-2 rounded-md shadow-lg">
          <div className="flex justify-between p-2 font-semibold text-lg">
            <div>Personal Details</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          {/* First & Last Name */}
          <div className="flex flex-col w-full md:flex-row">
            <div className="grow p-2">
              <label
                htmlFor="firstName"
                className="font-semibold text-sm text-gray-500"
              >
                First Name
              </label>
              <br></br>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div className="grow p-2">
              <label
                htmlFor="lastName"
                className="font-semibold text-sm text-gray-500"
              >
                Last Name
              </label>
              <br></br>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
          </div>
          {/* Email & Phone */}
          <div className="flex flex-col w-full md:flex-row">
            <div className="grow p-2">
              <label
                htmlFor="firstName"
                className="font-semibold text-sm text-gray-500"
              >
                Email
              </label>
              <br></br>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div className="grow p-2">
              <label
                htmlFor="lastName"
                className="font-semibold text-sm text-gray-500"
              >
                Phone
              </label>
              <br></br>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
          </div>
          {/* Country & City */}
          <div className="flex flex-col w-full md:flex-row">
            <div className="grow p-2">
              <label
                htmlFor="country"
                className="font-semibold text-sm text-gray-500"
              >
                Country
              </label>
              <br></br>
              <input
                type="text"
                id="country"
                name="country"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
            <div className="grow p-2">
              <label
                htmlFor="city"
                className="font-semibold text-sm text-gray-500"
              >
                City
              </label>
              <br></br>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                autoComplete="off"
                className="mt-1 p-3 w-full transition bg-gray-200/80 border-2 rounded focus:border-gray-600 focus:outline-none"
              />
            </div>
          </div>
        </div>
        {/* Professional Summary */}
        <div className="m-2 border-2 rounded-md shadow-lg">
          <div className="flex justify-between p-2 font-semibold text-lg">
            <div>Professional Summary</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* TODO: Type 2 line for need of professional summary */}

          {/* Textarea for professional summary */}
          <div className="p-3">
            <GrammarlyEditorPlugin clientId={props.clientId}>
              <textarea
                rows={5}
                placeholder="About your professional experience"
                className="p-2 w-full resize rounded-md border-2 focus:outline-none bg-gray-200/80 focus:border-gray-600"
              ></textarea>
            </GrammarlyEditorPlugin>
          </div>
        </div>
      </div>
      {/* right panel */}
      <div className="hidden bg-red-200 lg:block lg:w-1/2 ">
        <div className="p-4 m-4">
          <div className="text-2xl font-bold">
            {content.firstName} {content.lastName}
          </div>
          <div className="text-slate-500"> {content.email}</div>
          <div className="text-slate-500"> {content.phone}</div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      clientId: process.env.GRAMMARLY_CLIENT_ID,
    },
  };
}
