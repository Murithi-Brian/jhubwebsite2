import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";

export default function Carousel({
  images,
}: {
  images: { idx: number; img: string }[];
}) {
  const [activeIDX, setActiveIDX] = useState(1);
  const handleSlide = () => {
    if (activeIDX === images.length) {
      setActiveIDX(1);
    } else {
      setActiveIDX((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(handleSlide, 5000);

    return () => {
      clearInterval(slideInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIDX]);
  return (
    <div className="bg-background h-full">
      {images.map((image) => {
        return (
          <LazyLoadImage
            effect="blur"
            key={image.idx}
            className={`${
              activeIDX === image.idx
                ? "w-[486px] rounded-lg object-cover object-top block transition-all duration-100"
                : "hidden"
            }`}
            src={image.img}
            alt="event images"
            // width={60}
            // height={60}
          />
        );
      })}
    </div>
  );
}
