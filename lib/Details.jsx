const React = require('react')
const { object } = React.PropTypes
const Header = require('./Header')

class Details extends React.Component {
  render () {
    const params = this.props.params || {}
    const { title, url, img, read } = params

    return (
      <div className='container'>
        <Header />
        <div className='link-info'>
          <h1>{title}</h1>
          <h2>{url}</h2>
          <img className='link-image' src={img} />
          <h2>{read}</h2>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: object
}

module.exports = Details
