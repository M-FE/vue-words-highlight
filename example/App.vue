<script>
import Hello from './Hello';
// import MHightlight from '../src/main';

const TEXT = `Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages`;

export default {
    data() {
        return {
            keyword: "an incrementally"
        };
    },

    components: {
        Hello,
        // MHightlight
    },

    render() {
        return (
            <div>
                <div>
                    <label>Keywords: </label>
                    <input
                        style="width: 500px"
                        value={this.keyword}
                        onInput={e => {
                            this.keyword = e.target.value;
                        }}
                    />
                </div>

                <h2>Basic Usage</h2>
                <h3>默认（修改了颜色值）</h3>
                <p v-highlight={{ keyword: this.keyword }}>{ TEXT }</p>
                <h3>separator传入空，此时是全值匹配（修改了颜色值）</h3>
                <p v-highlight={{ 
                    keyword: this.keyword,
                    separator: ''
                }}>{ TEXT }</p>

                <h2>More</h2>
                <h3>大小写敏感</h3>
                <Hello v-highlight={{ 
                    keyword: this.keyword, 
                    caseSensitive: true
                }}>{ TEXT }</Hello>
                <h3>自定义高亮的类名和样式</h3>
                <m-hight-light highlight={{
                    keyword: this.keyword,
                    className: 'aaa',
                    style: {
                        color: '#f00',
                        border: '1px solid #ccc'
                    },
                    caseSensitive: this.caseSensitive
                }} title="Test">{ TEXT }</m-hight-light>
            </div>
        );
    }
};
</script>

<style>
p {
    color: #666;
}
</style>
