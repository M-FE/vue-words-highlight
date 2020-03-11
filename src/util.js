/**
 * 转义正则的特殊字符
 * @param {string} str 
 * @return {string}
 */
export const escapeReg = (str) => {
    return str.replace(/[\.\\\*\(\)\?\^\$\+\|\{\}\[\]\-\/\<\>]/g, '\\$&');
}

/**
 * 是否是Object
 * @param {*} value 
 */
export const isObject = (value) => {
    return Object.prototype.toString.call(value).includes('Object');
}
