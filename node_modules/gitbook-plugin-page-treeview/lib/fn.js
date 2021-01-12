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
 *      - Document: fn.js
 *      - Author: aleen42
 *      - Description: base library
 *      - Create Time: Feb 12nd, 2019
 *      - Update Time: Feb 12nd, 2019
 *
 *
 **********************************************************************/

const isNullity = x => x == null;
const TAG_NULL = [];
const TAG_ARRAY = [];
const TAG_OBJECT = ['[object Object]'];
const TAG_STRING = ['[object String]'];
const TAG_NUMBER = ['[object Number]'];
// https://stackoverflow.com/questions/7656280/how-do-i-check-whether-an-object-is-an-arguments-object-in-javascript/7656333#7656333
const TAG_ARGUMENTS = ['[object Arguments]'];
const TAG_FUNCTION = ['[object Function]'];
const tags = {};
[TAG_OBJECT, TAG_STRING, TAG_NUMBER, TAG_ARGUMENTS, TAG_FUNCTION].map(tag => { tags[tag[0]] = tag });
const getTag = x => isNullity(x) ? TAG_NULL : Array.isArray(x) ? TAG_ARRAY : tags[({}).toString.call(x)];
const is = TAG => x => getTag(x) === TAG;

/**
 * [replaceAll: replace all match sub-string in a string]
 * @param  {string} search      [description]
 * @param  {string} replacement [description]
 * @return {string}             [description]
 */
String.prototype.replaceAll = function (search, replacement) {
	return this.split(search).join(replacement);
};

/**
 * [leftTrim: trim left space]
 * @return {string} [description]
 */
String.prototype.leftTrim = function () {
	return this.replace(/^\s+/, '');
};

module.exports = {
	isOBJ: is(TAG_OBJECT),
	isSTR: is(TAG_STRING),
	isNUM: is(TAG_NUMBER),
	isFUN: is(TAG_FUNCTION),

	/**
	 * [E2A: HTML entities to Ascii]
	 * @param {string} str [description]
	 * @returns {void | string | *}
	 */
	E2A: str => str.replace(/&([\S]+?);/g, value => {
		value = value.replace('&', '');
		value = value.replace(';', '');

		/** get the first key of a specific value */
		const entity = Object.entries(require('./entity')).find(([, val]) => val === value);
		return !entity ? null : String.fromCharCode(entity[0]);
	}),

	/**
	 * [A2U: convert ascii to unicode]
	 * @param {string} str [description]
	 * @returns {string}
	 * @constructor
	 */
	A2U: str => str.split('').map(ch => `&#${ch.charCodeAt(0)};`).join(''),
};
