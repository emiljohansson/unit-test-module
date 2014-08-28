'use strict';
!function(o) {
    if (module && module.exports) module.exports = o;
    else return o;
}(function() {
    return {
        assert: function(a, def) {
            console.assert(a === true, def);
        },
        assertFalse: function(a, def) {
            console.assert(a === false, def);
        },
        assertEqual: function(a, b, def) {
            console.assert(a === b, def);
        },
        assertNotEqual: function(a, b, def) {
            console.assert(a !== b, def);
        }
    };
}());
