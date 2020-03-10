/**
 * 是否是Object
 * @param {*} value 
 */
const isObject = (value) => {
    return Object.prototype.toString.call(value).includes('Object');
}

/**
 * 格式化关键词
 * 传入为数组时，直接返回
 * 传入为字符串|数字时，当做字符串处理，用分隔符分隔字符串
 * @param {*} keyword 
 * @param {*} separator 默认使用空格分隔
 */
const initKeyword = (keyword, separator = ' ') => {
    if (Array.isArray(keyword)) {
        return keyword;
    }

    if (isObject(keyword) || ['boolean', 'undefined', 'symbol'].includes(typeof keyword)) {
        return [];
    }

    if (!separator) {
        return [keyword].filter(Boolean);
    }

    return (keyword + '').split(separator).filter(Boolean);
}

/**
 * 复制最初始的文本
 * @param {*} text 
 */
const copyOriginalHtml = (text) => {
    return `<div style="display: none;">${ text }</div>${ text }`;
}

/**
 * 重置el的html内容
 * @param {*} el 
 */
const resetHtml = (el) => {
    el.innerHTML = el.childNodes[0].innerHTML;
}

/**
 * directive必须传入一个对象
 * value的参数：{ 
 *     keyword: [string, number, array], 用于筛选的关键词
 *     separator: string, 分隔符，仅当传入的keyword是字符串时有效
 *     caseSensitive: bool, 是否大小写敏感
 *     className: string, 用于高亮的类名
 *     style: string, 用于高亮的样式
 * }
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 * @param {*} options
 */
const handle = (el, binding, vnode, options) => {
    if (!isObject(binding.value)) {
        return;
    }

    const params = {
        ...options,
        ...binding.value
    };

    const { 
        keyword,
        separator, 
        caseSensitive, 
        className = '', 
        style = ''
    } = params;
    const queries = initKeyword(keyword, separator);

    if (queries.length === 0) {
        el.innerHTML = copyOriginalHtml(el.childNodes[0].innerText);
        return;
    }

    const pattern = queries.map(k => `(${k})`).join('|');
    const reg = new RegExp(pattern, !caseSensitive ? 'ig' : 'g');
    const originEle = el.childNodes[0]; /* 存储原始数据的节点 */

    el.innerHTML = originEle.outerHTML + originEle.innerText.replace(reg, (i) => {
        return `<strong class="${className}" style="${style}">${i}</strong>`;
    });
}

function highlightDirective(options = {}) {
    return {
        bind(el, binding, vnode) {
            el.innerHTML = copyOriginalHtml(el.innerText);
        
            handle(el, binding, vnode, options);
        },
        update(el, binding, vnode) {
            handle(el, binding, vnode, options);
        },
        unbind(el) {
            resetHtml(el);
        }
    };
}

export default {
    install(Vue, options = {}) {
        const name = options.name || 'highlight';

        Vue.directive(name, highlightDirective(options))
    },
    highlight: highlightDirective()
};
