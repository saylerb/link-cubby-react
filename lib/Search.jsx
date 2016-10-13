const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='links'>
      {data.links.map((link) => (
        <div className='link-card'>
          <img src={`${link.img}`} className='link-card-img' />
          <div className='link-card_text'>
            <h3 className='link-card-title'>{link.title}</h3>
            <p className='link-card-description'>{link.read ? 'Read' : 'Unread'}</p>
            <h3>({link.year})</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
)
module.exports = Search
