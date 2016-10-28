const React = require('react')

const Debug = (props) => (
  <div>
    <pre style={{textAlign: 'left'}}><code>
      {JSON.stringify(props)}
    </code></pre>
  </div>
)

module.exports = Debug
