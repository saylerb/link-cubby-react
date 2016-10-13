const React = require('react')

const LinkCard = (props) => (
  <div className='link-card'>
    <img src={props.img} className='link-card-img' />
    <div className='link-card_text'>
      <h3 className='link-card-title'>{props.title}</h3>
      <p className='link-card-read'>{props.read ? 'Read' : 'Unread'}</p>
    </div>
  </div>
)

LinkCard.propTypes = {
  img: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  read: React.PropTypes.bool.isRequired
}

module.exports = LinkCard
