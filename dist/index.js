"use strict";var d=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=d(function(D,n){
var f=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),q=require('@stdlib/ndarray-base-numel-dimension/dist'),x=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/ndarray-base-clip-index/dist'),m=require('@stdlib/blas-ext-base-zindex-of-falsy/dist').ndarray;function g(t){var r,e,v,u,i,a;return a=t[0],r=f(t[1]),i=q(a,0),r=l(r,i),r>=i?-1:(i-=r,e=x(a,0),v=o(a)+e*r,u=m(i,c(a),e,v),u>=0&&(u+=r),u)}n.exports=g
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
