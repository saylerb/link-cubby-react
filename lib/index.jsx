const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const {Router, Route, IndexRoute, hashHistory} = require('react-router')
const Layout = require('./Layout')
const Details = require('./Details')
const { links } = require('../public/data')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} links={links} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('application'))
