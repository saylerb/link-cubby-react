const React = require('react')
const LinkCard = require('./LinkCard')
const { arrayOf, object } = React.PropTypes
const Header = require('./Header')

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  }

  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          linkSearch
        />
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
