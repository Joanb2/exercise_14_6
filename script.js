var Counter = React.createClass({
	getDefaultProps() {
		console.log('Here I could set some default props for my component, which I can override later.');
	},

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('Here I could set some initial state or global events like window or document.');
    },

    componentDidMount() {
        console.log('Here i could use Ajax call.');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillReceiveProps(nextProps) {
        console.log('I can check if some props are changed, and set new state.');
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Here I can decide to re-render or not. If i have big project then I would return false and prevent slowing down my page.');
     	return true;
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('Here I could set new variables based on the props.');
    },

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating the DOM with new values.');
    },

    componentWillUnmount() {
        console.log('Here I could remove some events for example or just cancel my component.');
    },

	render: function() {
        return  React.createElement('div', {}, 
                React.createElement('button', {onClick: this.increment},
                React.createElement('span', {}, '+')),
                React.createElement('p', {}, 'Counter: ' + this.state.counter),
                React.createElement('button', {onClick: this.decrement},
                React.createElement('span', {}, '-'))
                );
   	}

});
var element = React.createElement(Counter);
var element2 = React.createElement(Counter);

var app = React.createElement('div', {}, element, element2);
ReactDOM.render(app, document.getElementById('app'));