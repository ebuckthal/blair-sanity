import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import clsx from "clsx";

function Project(props) {
  const { title, mainImage } = props;

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

  return (
    <div className="h-screen w-screen">
      <div
        className={clsx(
          "text-shadow-gray-50 z-10 absolute top-0 w-full p-2 pb-5",
          "text-sm text-blue-800",
          zoom ? "hidden" : null
        )}
      >
        <Link href="/">
          <span className="cursor-pointer inline-block mr-5">
            Blair Ekleberry
          </span>
        </Link>
        <a href="mailto:blair.ekleberry@beauxartsparis.fr">
          blair.ekleberry@beauxartsparis.fr
        </a>
      </div>
      <img
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setZoom((z) => !z);
        }}
        src={imgUrl}
        style={!zoom ? { maxWidth: "100vw", maxHeight: "100vh" } : undefined}
        className={clsx(
          "cursor-pointer z-0 absolute",
          zoom ? "max-w-none" : "inset-0 m-auto"
        )}
      />
      <div
        className={clsx(
          "text-shadow-gray-50 whitespace-pre-line text-blue-800 text-sm z-10 absolute w-full bottom-0 p-2 pt-5",
          zoom ? "hidden" : null
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
