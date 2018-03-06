var React = require('react');
var ReactDOM = require('react-dom');

var About = React.createClass({
    render: function(){
        return (
            <div>
              <h1 className="page-title">About Component</h1>
              <p>Welcome to the About page !!.</p>
            </div>
        );
    }
});

module.exports = About;