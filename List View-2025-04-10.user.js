// ==UserScript==
// @name         List View
// @namespace    http://tampermonkey.net/
// @version      2025-04-10
// @description  try to take over the world!
// @author       You
// @match        https://artfight.net/manage/bookmarks/folders/unorganized
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=1
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=2
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=3
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=4
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=5
// @match        https://artfight.net/manage/bookmarks/folders/unorganized?page=6
// @icon         https://www.google.com/s2/favicons?sz=64&domain=artfight.net
// @grant        none
// ==/UserScript==

setTimeout(function() {
    document.getElementById('viewListBtn').click();
}, 500)
();