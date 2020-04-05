import { format } from "date-fns";

export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The identifier for the URL i.e. 'at-buttes-chaumont'",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "Use this field to order the works. Latest works appears first.",
      type: "datetime",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/${slug.current}`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : "Missing publishing date",
      };
    },
  },
};
