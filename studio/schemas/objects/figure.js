export default {
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Caption 1",
      name: "caption1",
      description: "Small amount of text shown below the work (optional)",
      type: "string",
      options: { isHighlighted: true },
    },
    {
      title: "Caption 2",
      name: "caption2",
      description: "Small amount of text shown below the work (optional)",
      type: "string",
      options: { isHighlighted: true },
    },
    {
      title: "Caption 3",
      name: "caption3",
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
