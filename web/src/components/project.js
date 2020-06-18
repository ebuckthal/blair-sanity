import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";

import styles from "./project.module.css";

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt } = props;

  useEffect(() => {
    // Fancy way to make 100vh work on mobile (including handling resize)
    const listener = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <article className={styles.root}>
      <div className={styles.header}>
        <a href="/">Blair Ekleberry</a>
        <a className={styles.email} href="mailto:blair.ekleberry@beauxartsparis.fr">
          blair.ekleberry@beauxartsparis.fr
        </a>
      </div>
      <div className={styles.mainImage}>
        {props.mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage)).width(2000).fit("scale").url()}
            alt={`Blair Ekleberry - ${title}`}
          />
        )}
      </div>
    </article>
  );
}

export default Project;
