const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')
const div = React.DOM.div

let MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'Hello, World!', color: 'mediumaquamarine'}),
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('application'))
