module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  ignorePatterns: ["ts-shared/**"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        trailingComma: "none"
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
