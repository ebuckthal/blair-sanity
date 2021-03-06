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
      description: "What the URL should be i.e. '/at-buttes-chaumont'",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure",
    },
    {
      name: "columnSpan",
      title: "Column Span",
      type: "number",
    },
    {
      name: "publishedAt",
      title: "Published at",
      description:
        "Use this field to order the works. Latest works appears first. It is not visible",
      type: "date",
      validation: (Rule) => Rule.error("You have to fill out the alternative text.").required(),
    },
  ],
  orderings: [
    {
      title: "Published At",
      name: "publishedAt",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
    prepare({ title = "No title", publishedAt, slug, media }) {
      return {
        title,
        media,
        subtitle: publishedAt,
      };
    },
  },
};
