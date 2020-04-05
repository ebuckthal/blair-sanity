import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockContent from "./block-content";
import Container from "./container";
import RoleList from "./role-list";

import styles from "./project.module.css";

function Project(props) {
  const { _rawBody, title, mainImage, publishedAt } = props;
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage)).width(1000).fit("scale").url()}
            alt={`Blair Ekleberry - ${title}`}
          />
        </div>
      )}
    </article>
  );
}

export default Project;
