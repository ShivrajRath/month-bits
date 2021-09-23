module.exports = {
  preset: "jest-puppeteer",
  globals: {
    PATH: "http://localhost:5000",
  },
  testMatch: ["**/src/**/*test.js"],
};
