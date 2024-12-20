import React from 'react';
import {
  IoGlobeOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5';

export default function TeamMate(props: { img: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; designation: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; github: string | undefined; twitter: string | undefined; fb: string | undefined; insta: string | undefined; lin: string | undefined; web: string | undefined; }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          className="rounded-full h-36 w-36 zoom"
          src={props.img}
          alt="team 1"
        />
        <h2 className="text-xl font-medium mt-6">{props.name}</h2>
        <h3 className="text-md">{props.designation}</h3>
        <div className="w-full flex justify-center pt-5 pb-5">
          <div className="flex flex-row gap-6 place-items-center mr-4">
            {props.github ? (
              <a href={props.github}>
                <IoLogoGithub className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
            {props.twitter ? (
              <a href={props.twitter}>
                <IoLogoTwitter className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
            {props.fb ? (
              <a href={props.fb}>
                <IoLogoFacebook className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
            {props.insta ? (
              <a href={props.insta}>
                <IoLogoInstagram className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
            {props.lin ? (
              <a href={props.lin}>
                <IoLogoLinkedin className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
            {props.web ? (
              <a href={props.web}>
                <IoGlobeOutline className="text-2xl text-black-700 hover:text-brand-500" />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
}
