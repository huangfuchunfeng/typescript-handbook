/* eslint-disable @typescript-eslint/no-var-requires */
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const PreRenderRoutes = [
  '/',
  '/typescript/handbook/basic-types',
  '/typescript/handbook/interfaces',
  '/typescript/handbook/functions',
]
module.exports = {
  devServer: {
    open: true
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') { return {} }
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          indexPath: path.join(__dirname, 'dist', 'index.html'),
          routes: PreRenderRoutes,
          renderer: new Renderer({
            headless: true,
            renderAfterDocumentEvent: 'render-event'
          })
        }),

      ],
      optimization: {
        splitChunks: {
          automaticNameDelimiter: '-'
        }
      }
    }
  },
}
// process.on("exit", function (code) {
//   console.log(`-----------------------进程结束-代码=${code}-----------------------------------------------`)
// })