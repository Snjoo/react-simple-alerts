require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Alerts = require('react-simple-alerts');

var App = React.createClass({
  displayName: 'App',

  render: function render() {

    var types = [{
      heading: 'Sorry!',
      content: 'Something prevented us from executing the order'
    }, {
      heading: 'Welcome, stranger!',
      content: 'This is a custom alert component',
      type: 'info'
    }, {
      heading: 'Beware of the consequences',
      content: 'You are about to delete your account',
      type: 'warning'
    }, {
      heading: 'Sorry!',
      content: 'Something prevented us from executing the order',
      type: 'error'
    }];

    var onlyHeadings = [{
      heading: 'Sorry!'
    }, {
      heading: 'Welcome, stranger!',
      type: 'info'
    }, {
      heading: 'Beware of the consequences',
      type: 'warning'
    }, {
      heading: 'Sorry!',
      type: 'error'
    }];

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h2',
        null,
        'A) Basic types (info, warning, error, [none])'
      ),
      React.createElement(Alerts, { items: types }),
      React.createElement(
        'h2',
        null,
        'B) No content provided (info, warning, error, [none])'
      ),
      React.createElement(Alerts, { items: onlyHeadings })
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-simple-alerts":undefined}]},{},[1]);
