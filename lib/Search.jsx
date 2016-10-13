const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = () => (
  <div className='container'>
    <div className='links'>
      {data.links.map((link) => (
        <ShowCard link={link} />
      ))}
    </div>
  </div>
)
module.exports = Search
