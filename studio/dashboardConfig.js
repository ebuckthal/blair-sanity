export default {
  widgets: [
    {
      name: "document-list",
      options: { title: "Works", order: "_createdAt desc", types: ["work"] },
      layout: { width: "large" },
    },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5e7f5ae3ccd9c71977764147",
                  title: "Sanity Studio",
                  name: "blair-sanity-studio",
                  apiId: "0d519f39-acb2-4174-8516-aa8dcb317e6e",
                },
                {
                  buildHookId: "5e7f5ae320871ba190647744",
                  title: "Portfolio Website",
                  name: "blair-sanity",
                  apiId: "8b0cafe6-5213-4096-99d5-346218b6e6b8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/ebuckthal/blair-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blair-sanity.netlify.com",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
  ],
};
