import { Link } from "gatsby";
import React from "react";
import clsx from "clsx";

import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function ProjectPreviewGrid(props) {
  return (
    <div className="p-2">
      <div className={clsx("w-full pb-5", "text-sm text-blue-800")}>
        <Link href="/">
          <h1 className="inline-block mr-5">Blair Ekleberry</h1>
        </Link>
        <a href="mailto:blair.ekleberry@beauxartsparis.fr">
          blair.ekleberry@beauxartsparis.fr
        </a>
      </div>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {props.nodes.map((node) => {
          if (!node.mainImage || !node.mainImage.asset) {
            return null;
          }
          const src = imageUrlFor(buildImageObj(node.mainImage))
            .fit("max")
            .width(600)
            .url();

          return (
            <Link
              className={clsx(
                "self-center self-between"
                /* node.columnSpan > 1 ? "md:col-span-2" : "" */
              )}
              key={node.id}
              to={`/${node.slug.current}`}
            >
              {node.mainImage && node.mainImage.asset && (
                <img
                  className="w-full object-contain"
                  src={src}
                  alt={`Blair Ekleberry - ${node.title}`}
                />
              )}
            </Link>
          );
        })}
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
