require('./sass/main.sass');
var smoothScroll = require('smooth-scroll');


smoothScroll.init({
    selector: '[data-scroll]',
    // selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 800,
    easing: 'easeInOutCubic',
    offset: 0,
    // callback: function ( anchor, toggle ) {} // Function to run after scrolling
});