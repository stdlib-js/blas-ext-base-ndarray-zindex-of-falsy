/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first falsy element in a one-dimensional double-precision complex floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-zindex-of-falsy
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray-vector-complex128' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var zindexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-zindex-of-falsy' );
*
* var x = new Complex128Vector( [ 1.0, 2.0, 0.0, 0.0, 4.0, 5.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var idx = zindexOfFalsy( [ x, fromIndex ] );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
