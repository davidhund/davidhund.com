/* 
 * 
 * Your app.js code
 *
 * All vendor libs are managed through Bower and therefore in ./bower_components/*
 * A Gulp Task will concatenate and minify all these in one file
 *
 */

// Avoid `console` errors in browsers that lack a console.
// By the H5BP guys/girls...
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Local Code in Revealing Module Pattern
var DH = (function() {
    var _sPrivate = "Private String",
        sPublic = "Public String";
    var _init = function(){
        console.log('Initialized');
    };

    return {
        init: _init,
        str:  sPublic
    }
})();

// Run
$(document).ready(function(){
    DH.init();    
});
