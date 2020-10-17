import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import clsx from "clsx";

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt } = props;

  const [zoom, setZoom] = useState(false);

  const imgUrl = imageUrlFor(buildImageObj(mainImage))
    .width(2000)
    .fit("scale")
    .url();

  useEffect(() => {
    // Fancy way to make 100vh work on mobile (including handling resize)
    const listener = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    };

    listener();

    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  useEffect(() => {
    const listener = (e) => {
      setMouseX(e.clientX);
    };
    window.addEventListener("mousemove", listener);
    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, []);

  return (
    <div
      onClick={() => setZoom((z) => !z)}
      className="h-screen w-screen cursor-pointer"
    >
      <div
        className={clsx(
          "text-shadow-gray-50 z-10 absolute top-0 w-full p-2 pb-5",
          "text-sm text-blue-800",
          !zoom ? "opacity-100" : "opacity-0"
        )}
      >
        <Link href="/">
          <h1 className="inline-block mr-5">Blair Ekleberry</h1>
        </Link>
        <a href="mailto:blair.ekleberry@beauxartsparis.fr">
          blair.ekleberry@beauxartsparis.fr
        </a>
      </div>
      <img
        src={imgUrl}
        className={clsx(
          "hide-alt max-w-none z-0 m-auto inset-0 mt-0 absolute",
          !zoom ? "w-full h-full object-contain" : null
        )}
        alt={`Blair Ekleberry - ${title}`}
      />
      <div
        className={clsx(
          "text-shadow-gray-50 whitespace-pre-line text-blue-800 text-sm z-10 absolute w-full bottom-0 p-2 pt-5",
          !zoom ? "opacity-100" : "opacity-0"
        )}
      >
        <div>{mainImage.caption1 || null}</div>
        <div>{mainImage.caption2 || null}</div>
        <div>{mainImage.caption3 || null}</div>
      </div>
    </div>
  );
}

export default Project;
