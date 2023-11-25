module.exports = {
  root: true,
  // This tells t to load the config from the package `eslint-config-custom`
  extends: ["adapter"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
