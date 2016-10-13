const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => {
  return (
    <div>
      <MyTitle title="Hello, World!" color='rebeccapurple' />
      <MyTitle title="LOL" color='papayawhip' />
      <MyTitle title="OMGWTFBBQ" color='#f06d06' />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('application'))
