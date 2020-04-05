export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Caption",
      name: "caption",
      description: "Small amount of text shown below the work (optional)",
      type: "string",
      options: { isHighlighted: true },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
    prepare({ title = "No title", slug, media }) {
      const path = `/${slug.current}`;
      return {
        title,
        media,
        subtitle: path,
      };
    },
  },
};
