/** @jsx React.DOM */

import {name} from './lib/demo.js'
import {Body} from './lib/main.js'
import {About} from './app/about.js'

import React from 'react'
import Router from 'html5-router'

var router = Router()
router.addRoute("/", function(){
  React.renderComponent(<Body name="index"/>, document.body)
})
router.addRoute("/login", function(){
  React.renderComponent(<Body name="login"/>, document.body)
})

router.on("route", function (event) {
  console.log("event", { url: event.url, data: event.data })
})

Router.on("popstate", router)
router()
