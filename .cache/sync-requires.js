const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ruthsitinga/Documents/GitHub/360-menu/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/ruthsitinga/Documents/GitHub/360-menu/src/pages/index.jsx")))
}

