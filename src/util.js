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

/**
 * 初始化样式，可传入字符串和对象
 * @param {object|string} style
 * @return {string}
 */
export const initStyle = (style) => {
    if (isObject(style)) {
        let ret = '';

        for (let key in style) {
            ret += `${ key }: ${ style[key] }; `;
        }

        return ret;
    }

    if (typeof style === 'string') {
        return style;
    }

    return '';
}

/**
 * 处理对象类型的classname
 * @param {*} classname 
 * @return {string}
 */
const initObjClass = (classname) => {
    let ret = [];
    for (let key in classname) {
        if (classname[key]) {
            ret.push(key);
        }
    }

    return ret.join(' ');
}

/**
 * 初始化类名，可传入String|Array<String|Object>|Object
 * @param {*} classname 
 * @return {string}
 */
export const initClassname = (classname) => {
    /* 对象。只取真值 */
    if (isObject(classname)) {
        return initObjClass(classname);
    }

    if (Array.isArray(classname)) {
        return classname.map(cn => {
            if (isObject(cn)) {
                return initObjClass(cn);
            }

            return typeof cn === 'string' ? cn : '';
        }).join(' ');
    }

    return typeof classname === 'string' ? classname : '';
}
