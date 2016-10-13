const React = require('react')

const ShowCard = (props) => (
  <div className='link-card'>
    <img src={props.link.img} className='link-card-img' />
    <div className='link-card_text'>
      <h3 className='link-card-title'>{props.link.title}</h3>
      <p className='link-card-description'>{props.link.read ? 'Read' : 'Unread'}</p>
    </div>
  </div>
)

module.exports = ShowCard
