var React = require('react');
var ReactDOM = require('react-dom');

var About = React.createClass({
    render: function(){
        return (
            <div>
              <h3>About Component</h3>
              <p>Welcome to the About page !!.</p>
            </div>
        );
    }
});

module.exports = About;