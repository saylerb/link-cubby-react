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

const { string, bool } = React.PropTypes

LinkCard.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  read: bool.isRequired
}

module.exports = LinkCard
