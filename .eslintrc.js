module.exports = {
  root: true,
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/require-default-props": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/prefer-default-export": "off",
    "react/button-has-type": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-no-useless-fragment":"off",
    "react/jsx-props-no-spreading": [
      2,
      {
        html: "ignore",
        exceptions: ["Item", "Selector", "Field", "Input"],
      },
    ],
    "no-param-reassign": [
      2,
      {
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
