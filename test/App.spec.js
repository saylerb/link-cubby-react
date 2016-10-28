/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../lib/Search')
const LinkCard = require('../lib/LinkCard')
const { shallow, mount } = require('enzyme')
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

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'hello'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('hello')
    expect(wrapper.find('.link-card').length).to.equal(1)
  })
})
