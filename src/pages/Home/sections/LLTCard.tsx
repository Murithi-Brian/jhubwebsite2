//import React from 'react';

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function LLTCard(props: { img: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <div className="flex flex-col items-center gap-2 h-auto w-full text-center hover:shadow-lg zoom rounded-md py-6 px-8 lg:px-2">
      <img src={props.img} alt="" className="h-16" />
      <h1 className="text-2xl font-bold tracking-wide py-3">{props.title}</h1>
    </div>
  );
}
