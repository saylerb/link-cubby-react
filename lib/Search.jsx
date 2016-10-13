const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    {data.links.map((link) => (
      <h3>{link.title}</h3>
    ))}
  </div>
)

module.exports = Search
