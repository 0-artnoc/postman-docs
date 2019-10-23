const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const glob = require('glob');
const uuidv4 = require('uuid/v4');
const redirects = require('./redirects');


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const underscoreSlug = node.fields.slug.replace(/-/g, '_');
    createRedirect({
      fromPath: underscoreSlug,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: node.fields.slug,
    });
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/doc.jsx'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};


exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const getDirectories = (src) => glob.sync(`${src}/**/*`);
  const paths = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      let newVal = '';
      newVal = val.replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal = newVal.slice(-5) === 'index' ? newVal.substring(0, newVal.length - 5) : newVal;
      return `${newVal}/`;
    });

  const output = {};

  paths.sort().forEach((val) => {
    let split = val.split('/');
    split = split.filter((url) => url !== '');

    let current = output;
    split.forEach((part) => {
      current[part] = current[part] || {};
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
  });


  const { createNode } = actions;

  const myData = {
    key: uuidv4(),
    paths: JSON.stringify(output.docs),
  };

  const nodeContent = JSON.stringify(myData);

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: 'leftNavLinks',
      mediaType: 'text/html',
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  };

  const node = { ...myData, ...nodeMeta };
  createNode(node);
};
