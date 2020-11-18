// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/page-2.js")),
  "component---src-pages-qp-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/qp.js")),
  "component---src-pages-robocup-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/robocup.js")),
  "component---src-pages-sponsor-js": preferDefault(require("/Users/domogami/Documents/GitHub/Website2.0/src/pages/sponsor.js"))
}

exports.json = {
  "layout-index.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/404.json"),
  "index.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/index.json"),
  "page-2.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/page-2.json"),
  "qp.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/qp.json"),
  "robocup.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/robocup.json"),
  "sponsor.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/sponsor.json"),
  "404-html.json": require("/Users/domogami/Documents/GitHub/Website2.0/.cache/json/404-html.json")
}