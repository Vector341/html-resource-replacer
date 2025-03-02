module.exports = {
  "*": [
    "prettier --cache --write --ignore-unknown",
    "cspell --cache --no-must-find-files",
  ],
  "*.[c|m]js": ["eslint --cache --fix"],
};
