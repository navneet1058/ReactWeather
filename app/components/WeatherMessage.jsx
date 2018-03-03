var React = require('react');
var ReactDOM = require('react-dom');

var WeatherMessage = React.createClass({
    render: function(){
        var {temp, location} = this.props;
        return (
           <h3>It's {temp} in {location}.</h3>
        );
    }
});

module.exports = WeatherMessage;