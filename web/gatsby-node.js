const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityWork(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            columnSpan
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityWork || {}).edges || [];

  projectEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/${slug}`;

      reporter.info(`Creating project page: ${path}`);

      createPage({
        path,
        component: require.resolve("./src/templates/project.js"),
        context: { id },
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProjectPages(graphql, actions, reporter);
};
