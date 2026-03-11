module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: [
      "features/step-definitions/**/*.ts",
      "features/support/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress"],
    parallel: 2
  }
}