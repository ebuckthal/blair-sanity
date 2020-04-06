import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import styles from "./project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <div className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <div
              className={`${styles.gridItem} ${
                node.columnSpan > 1 ? styles.span2 : ""
              }`}
              key={node.id}
            >
              <ProjectPreview {...node} />
            </div>
          ))}
      </div>
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default ProjectPreviewGrid;
