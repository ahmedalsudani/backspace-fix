// ==UserScript==
// @name            Backspace Fix
// @namespace       ahmed.al-sudani.com/projects/backspace-back-fix
// @version         0.1.1
// @description     Script that prevents the default backspace behavior. Seems to work just fine everywhere.
//                  License: MIT License
// @match           http*://*/*
// @run-at          document-start
// @copyright       2014-2015, Ahmed Al-Sudani
// ==/UserScript==

// As per http://stackoverflow.com/a/25099617/1009017
document.addEventListener('keydown', stopDefaultBackspaceBehaviour);
document.addEventListener('keypress', stopDefaultBackspaceBehaviour);


function stopDefaultBackspaceBehaviour(event) {
    'use strict';
    event = event || window.event;
    if (event.keyCode === 8) {
        var elements = "HTML, BODY, TABLE, TBODY, TR, TD, DIV";
        var d = event.srcElement || event.target;
        var regex = new RegExp(d.tagName.toUpperCase());
        if (d.contentEditable != true) {
            if (regex.test(elements)) {
                event.preventDefault ? event.preventDefault() : event.returnValue = false;
            }
        }
    }
}
