/** @jsx React.DOM */

import React from 'react'

var Body = React.createClass({
  render: function() {
    return (<div className="container">
      <h1>Welcome Page</h1>
      <p>Hello {this.props.name}</p>
    </div>)
  }
})

export {Body}
