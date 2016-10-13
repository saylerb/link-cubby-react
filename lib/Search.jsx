const React = require('react')
const data = require('../public/data')
const LinkCard = require('./LinkCard')

const Search = () => (
  <div className='container'>
    <div className='links'>
      {data.links.map((link) => (
        <LinkCard {...link} key={link.id} />
      ))}
    </div>
  </div>
)
module.exports = Search
