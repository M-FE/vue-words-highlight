<script>
import directive from './directive';

export default {
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        highlight: {
            type: Object,
            default() {
                return {};
            }
        }
    },

    directives: {
        mhl: directive.highlight
    },

    render(h) {
        return h(this.tag, {
            domProps: this.$attrs,
            directives: [{
                name: 'mhl',
                value: this.highlight
            }]
        }, this.$slots.default);
    }
};
</script>
