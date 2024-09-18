/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// /** @type {import('jest').Config} */
// const config = {
//   clearMocks: true,
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   coverageProvider: "v8",
//   coverageReporters: ["json", "text", "lcov", "clover"],
//   coverageThreshold:{
//     global:{
//       branch:100,
//       functions:100,
//       lines:100,
//       statements:100
//     }
//   }
// };

// module.exports = config;

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
