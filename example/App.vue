<script>
import Hello from './Hello';
// import MHightlight from '../src/main';

const TEXT = `Twitter is an American microblogging and social networking
    service on which users post and interact with messages known
    as "tweets". Registered users can post, like, and retweet
    tweets, but unregistered users can only read them. Users
    access Twitter through its website interface, through Short 
    Message Service (SMS) or its mobile-device application
    software ("app"). Twitter, Inc. is based in San Francisco,
    California, and has more than 25 offices around the world.
    Tweets were originally restricted to 140 characters, but was
    doubled to 280 for non-Asian languages in November 2017.
`;

export default {
    data() {
        return {
            keyword: "an user",
            caseSensitive: false
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
                        value={this.keyword}
                        onInput={e => {
                            this.keyword = e.target.value;
                        }}
                    />
                </div>
                <div>
                    <label>Case Sensitive: </label>
                    <input checked={this.caseSensitive} type="checkbox" onChange={
                        e => {
                            this.caseSensitive = e.target.checked;
                        }
                    } />
                </div>
                <h2>Basic Usage</h2>
                <p v-highlight={{ 
                    keyword: this.keyword, 
                    style: 'color: #00f', 
                    caseSensitive: this.caseSensitive,
                    separator: ''
                }}>{ TEXT }</p>
                <h2>For components</h2>
                <h3>Directive</h3>
                <Hello v-highlight={{ 
                    keyword: this.keyword, 
                    caseSensitive: this.caseSensitive 
                }}>{ TEXT }</Hello>
                <h3>Component</h3>
                <m-hight-light highlight={{
                    keyword: this.keyword,
                    className: 'aaa',
                    style: 'color: red',
                    caseSensitive: this.caseSensitive
                }} title="Test">{ TEXT }</m-hight-light>
            </div>
        );
    }
};
</script>
