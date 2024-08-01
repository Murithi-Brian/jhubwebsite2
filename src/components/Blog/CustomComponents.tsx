import { PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../utils/sanityClient";
import { useRef, useEffect } from "react";
import { IconSeeding } from "@tabler/icons-react";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: {
  asset: {
    _id: string;
    url: string;
  };
}) => {
  return builder.image(source);
};

export const ModelViewComponents: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h4: ({ children }) => (
      <h2 className="font-medium text-3xl flex items-center gap-4">
        <IconSeeding className="text-[#6941C6]" />
        {children}
      </h2>
    ),
    normal: ({ children }) => <p className="text-lg py-3">{children}</p>,
  },
};

export const components: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl text-dark-grey">{children}</h2>
    ),
    normal: ({ children }) => <p className="text-lg py-3">{children}</p>,
  },
};

export const previewComponents: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl text-dark-grey">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="line-clamp-2 sm:line-clamp-3 text-sm/relaxed text-gray">
        {children}
      </p>
    ),
  },
};

export const Truncate = (str: string) => {
  return str.substring(0, 200) + " ...";
};

export const cardComponents: PortableTextComponents = {
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl text-dark-grey">{children}</h2>
    ),
    normal: ({ children }) => {
      const ref = useRef<HTMLParagraphElement>(null);

      useEffect(() => {
        if (ref.current) {
          const text = ref.current.textContent || "";
          if (text.length > 300) {
            ref.current.textContent = text.substring(0, 300) + "...";
          }
        }
      }, []);

      return (
        <p ref={ref} className="text-base text-light-grey">
          {children}
        </p>
      );
    },
  },
};
