const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://web5-gowedu-dev.azurewebsites.net/api/:path*`,
      },
    ];
  },
};
