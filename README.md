## Vue Words Highlight
用于高亮关键词的vue组件，可以用于类似于搜索的功能。

## Installation
```javascript
    npm install --save vue-words-highlight
    # or
    yarn add vue-words-highlight
```

## Usage
### Use Directive
```javascript
    import { highlight } from 'vue-words-highlight';
    Vue.use(highlight, {
        name: 'highlight',
        className: 'red',
        style: 'color: #0f0',
        caseSensitive: false
    });

    // new Vue...
```
### Use Component
```javascript
    import Hightlight from 'vue-words-highlight';
    Vue.component('hight-light', Hightlight);
```

### Component.vue
```html
    <template>
        <!-- Component -->
        <high-light :highlight="{keyword: 'word'}">Hello, word.</high-light>
        <!-- Directive -->
        <div v-highlight="{keyword: 'hello', separator: ' '}">Hello, word.</div>
    </template>
```

## More Options
所有参数都可以在Vue.use(highlight, {...options})中进行定义，也可以在v-highlight="{...override}"中进行定义或覆盖，使用组件的形式时，参数将以对象的形式通过highlight进行传递

- **`name: `** `String`

默认值：`highlight`。只在Vue.use(highlight, {name: 'highlight'})时使用，用于定义Directive的name.

- **`keyword: `** `Array<String>|String|Number`

用于高亮的关键词。当传入的是字符串或数字时，将格式化成字符串，并将使用**`separator`**分隔成数组。

- **`separator`** `String`

当且仅当**`keyword`**为字符串时有效。默认值：` `。

- **`caseSensitive`** `Boolean`

大小写是否敏感。默认值：`false`

- **`className`** `String`

高亮的类名。

- **`style`** `String`

高亮的样式。
