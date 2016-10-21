const React = require('react')
const LinkCard = require('./LinkCard')
const { arrayOf, object } = React.PropTypes

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Link Cubby</h1>
          <input
            value={this.state.searchTerm}
            className='search-input'
            type='text' placeholder='Search'
            onChange={this.handleSearchTermEvent}
          />
        </header>
        <div className='links'>
          {this.props.route.links
            .filter((show) => (
              `'${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            )
            .map((link) => (
              <LinkCard {...link} key={link.id} />
          ))}
        </div>
        <div>
          <pre style={{textAlign: 'left'}}><code>
            {JSON.stringify(this.props)}
          </code></pre>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  route: object,
  links: arrayOf(object)
}

module.exports = Search
