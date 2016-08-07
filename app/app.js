var React = require('react'),
	ReactDOM = require('react-dom');

class Search extends React.Component {
	render() {
		return (<h1>React Hello World!</h1>);
	}
}

ReactDOM.render((<Search />), document.getElementById('content'));