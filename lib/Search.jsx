const React = require('react')
const data = require('../public/data')
const LinkCard = require('./LinkCard')

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Link Cubby</h1>
          <input className='search-input' type='text' placeholder='Search' />
        </header>
        <div className='links'>
          {data.links.map((link) => (
            <LinkCard {...link} key={link.id} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
