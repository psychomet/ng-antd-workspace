module.exports = {
  '{libs,apps,tools}/**/*.{ts,js,json,md,html,css,scss}': [
    'nx workspace-lint',
    'nx format:write --uncommitted --libs-and-apps',
  ],
};
