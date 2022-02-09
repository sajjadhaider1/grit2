// next.config.js
module.exports = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      // Delete default config for 404 page
      // delete defaultPathMap['/404'];

      // and replace it with 404.html
      // means basically instead of creating a new directory
      // simply render the file
      // defaultPathMap['/404.html'] = {page: '/404'}

      // Return map
      return defaultPathMap
    }
}
