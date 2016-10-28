const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.handleSearchTermChange(event.target.value)
  }

  render () {
    let utilSpace
    if (this.props.linkSearch) {
      utilSpace = <input type='text'
        className='search-input'
        placeholder='Search'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>Link Cubby</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: func,
  linkSearch: bool,
  searchTerm: string
}

module.exports = Header
