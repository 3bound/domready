// Exacute a function when the DOM is ready

'use strict';

// imports
const R = require('ramda');


/**
 * Is the document loading?
 *
 * -> bool
 */
const isLoading = () => R.equals(document.readyState, 'loading');


/**
 * Execute a function after the DOMContentLoaded event has fired
 *
 * (-> x) -> undefined
 */
const runLater = fn => document.addEventListener('DOMContentLoaded', fn);


/**
 * Execute a function now
 *
 * (-> x) -> x
 */
const runNow = fn => fn();


/**
 * Execute a function when the DOM is ready
 *
 * (-> x) -> x || undefined
 */
const domready = fn => R.ifElse(
  isLoading,
  runLater,
  runNow
)(fn);


module.exports = domready;
