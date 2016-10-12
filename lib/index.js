const React = require('react');
const ReactDOM = require('react-dom');

var div = React.DOM.div
var h1 = React.DOM.h1

class Hello extends React.Component {
  constructor() {
    super()
  }

  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
}

const MyFirstComponent = (
  div(null,
    React.createElement(Hello, {title: 'Hello, World!', color: 'mediumaquamarine' }),
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('application'))
