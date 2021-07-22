
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/ricoarisandy/Documents/Work/ARISAN.ORG/MyCV/ricoarisandyw.github.io/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/ricoarisandy/Documents/Work/ARISAN.ORG/MyCV/ricoarisandyw.github.io/src/pages/index.tsx")),
  "component---src-pages-test-tsx": preferDefault(require("/Users/ricoarisandy/Documents/Work/ARISAN.ORG/MyCV/ricoarisandyw.github.io/src/pages/test.tsx"))
}

