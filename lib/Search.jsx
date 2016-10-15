const React = require('react')
const data = require('../public/data')
const LinkCard = require('./LinkCard')

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
          {data.links
            .filter((show) => (
              `'${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            )
            .map((link) => (
              <LinkCard {...link} key={link.id} />
          ))}
        </div>
      </div>
    )
  }
}

module.exports = Search
