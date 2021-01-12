/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for tests
 *      - Create Time: Aug 21st, 2016
 *      - Update Time: Aug 21st, 2016
 *
 *
 **********************************************************************/

const gitbookTreeview = require('./../lib');

/**
 * [should: test framework module]
 * @type {Object}
 */
const should = require('chai').should();

describe('tests', () => {
    it('test case 1', () => {
        gitbookTreeview.test({}, '#abc\n##cde\n').should.to.equal('<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">Copyright &#169; aleen42 all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div><ul>\n<li><div><a href="#abc">abc</a><i class="level__parent level__item level__parent--opened" state="opened" onclick="var curState = this.getAttribute(\'state\');var nextState = curState === \'opened\' ? \'hidden\' : \'opened\';this.setAttribute(\'state\', nextState);this.className = this.className.split(curState).join(nextState);var list = this.parentNode.nextElementSibling;if (nextState === \'hidden\') {    list.style.display = \'none\';} else {    list.style.display = \'block\';}"></i></div>\n<ul>\n<li><div><a href="#cde">cde</a><i></i></div></li>\n</ul></li>\n</ul>\n</div>');
    });

    it('test case 2 - copyright', () => {
        gitbookTreeview.test({copyright: 'Copyright &#169; alien'}, '#1. level1\n##1.1 level2\n### 1.1.1 level3\n').should.to.equal('<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">Copyright &#169; alien all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div><ul>\n<li><div><a href="#1-level1">1. level1</a><i class="level__parent level__item level__parent--opened" state="opened" onclick="var curState = this.getAttribute(\'state\');var nextState = curState === \'opened\' ? \'hidden\' : \'opened\';this.setAttribute(\'state\', nextState);this.className = this.className.split(curState).join(nextState);var list = this.parentNode.nextElementSibling;if (nextState === \'hidden\') {    list.style.display = \'none\';} else {    list.style.display = \'block\';}"></i></div>\n<ul>\n<li><div><a href="#11-level2">1.1 level2</a><i class="level__parent level__item level__parent--opened" state="opened" onclick="var curState = this.getAttribute(\'state\');var nextState = curState === \'opened\' ? \'hidden\' : \'opened\';this.setAttribute(\'state\', nextState);this.className = this.className.split(curState).join(nextState);var list = this.parentNode.nextElementSibling;if (nextState === \'hidden\') {    list.style.display = \'none\';} else {    list.style.display = \'block\';}"></i></div>\n<ul>\n<li><div><a href="#111-level3">1.1.1 level3</a><i></i></div></li>\n</ul></li>\n</ul></li>\n</ul>\n</div>');
    });

    it('test case 3 - collapsed', function () {
		gitbookTreeview.test({collapsed: true}, '#1. level1\n##1.1 level2\n### 1.1.1 level3\n').should.to.equal('<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">Copyright &#169; aleen42 all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div><ul>\n<li><div><a href="#1-level1">1. level1</a><i class="level__parent level__item level__parent--hidden" state="hidden" onclick="var curState = this.getAttribute(\'state\');var nextState = curState === \'opened\' ? \'hidden\' : \'opened\';this.setAttribute(\'state\', nextState);this.className = this.className.split(curState).join(nextState);var list = this.parentNode.nextElementSibling;if (nextState === \'hidden\') {    list.style.display = \'none\';} else {    list.style.display = \'block\';}"></i></div>\n<ul style="display: none;">\n<li><div><a href="#11-level2">1.1 level2</a><i class="level__parent level__item level__parent--hidden" state="hidden" onclick="var curState = this.getAttribute(\'state\');var nextState = curState === \'opened\' ? \'hidden\' : \'opened\';this.setAttribute(\'state\', nextState);this.className = this.className.split(curState).join(nextState);var list = this.parentNode.nextElementSibling;if (nextState === \'hidden\') {    list.style.display = \'none\';} else {    list.style.display = \'block\';}"></i></div>\n<ul style="display: none;">\n<li><div><a href="#111-level3">1.1.1 level3</a><i></i></div></li>\n</ul></li>\n</ul></li>\n</ul>\n</div>')
	});
});
