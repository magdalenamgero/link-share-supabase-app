/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": null, // This removes the kebab-case requirement
  },
};

export default stylelintConfig;
