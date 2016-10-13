const React = require('react')
const links = require('../public/data')

const Search = () => (
  <pre><code>
    {JSON.stringify(links, null, 4)}
  </code></pre>
)

module.exports = Search
