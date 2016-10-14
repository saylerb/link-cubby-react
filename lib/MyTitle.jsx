const React = require('react')

class MyTitle extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
}

module.exports = MyTitle
