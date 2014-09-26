/** @jsx React.DOM */

import React from 'react'

var About = React.createClass({
  render: function() {
    return (<div className="container">
      <h1>About</h1>
      <p>Hello {this.props.name}</p>
    </div>)
  }
})

export {About}
