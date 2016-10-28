const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const Layout = require('./Layout')
const Details = require('./Details')
const { links } = require('../public/data')

class App extends React.Component {

  constructor (props) {
    super(props)
    this.assignLink = this.assignLink.bind(this)
  }

  assignLink (nextState, replace) {
    const linkArray = links.filter(link => link.id === parseInt(nextState.params.id))

    if (linkArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, linkArray[0])

    return nextState
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} links={links} />
          <Route path='/details/:id' component={Details} onEnter={this.assignLink} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('application'))
