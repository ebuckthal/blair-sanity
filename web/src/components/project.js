import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import clsx from "clsx";
import { X } from "react-feather";

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
    <>
      <div
        className={clsx(
          zoom ? "hidden" : null,
          "bg-gray-50 flex flex-col justify-between",
          "h-screen w-screen p-2 md:p-3 lg:p-5"
        )}
      >
        <div className="flex flex-row justify-between items-start">
          <div className={clsx("flex flex-col items-start")}>
            <Link to="/">
              <span className="relative z-10">Blair Ekleberry</span>
            </Link>
            <Link to="/">
              <span className="relative z-10">
                blair.ekleberry@beauxartsparis.fr
              </span>
            </Link>
          </div>
          <Link to="/">
            <X className="relative z-10 svg-shadow-gray-50" />
          </Link>
        </div>
        <div className={clsx("flex flex-col items-start")}>
          <span className="relative z-10">{mainImage.caption1 || null}</span>
          <span className="relative z-10">{mainImage.caption2 || null}</span>
          <span className="relative z-10">{mainImage.caption3 || null}</span>
        </div>
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
          "cursor-zoom-in absolute",
          zoom ? "max-w-none" : "inset-0 m-auto"
        )}
      />
    </>
  );
}

export default Project;
