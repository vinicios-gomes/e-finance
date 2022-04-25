module.exports = {
  hooks: {
    'pre-commit': 'npm run fix:style && npm run lint',
    'post-merge': 'npm ci',
  },
};
