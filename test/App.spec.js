/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../lib/Search')
const LinkCard = require('../lib/LinkCard')
const { shallow } = require('enzyme')
const { links } = require('../public/data')

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>Link Cubby</h1>)).to.be.true
  })

  it('should render all the links', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(LinkCard).length).to.equal(links.length)
  })
})
