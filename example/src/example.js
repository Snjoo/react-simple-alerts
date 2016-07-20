var React = require('react');
var ReactDOM = require('react-dom');
var Alerts = require('react-simple-alerts');

var App = React.createClass({

  render() {

    const types = [
      {
        heading: 'Sorry!',
        content: 'Something prevented us from executing the order'
      },
      {
        heading: 'Welcome, stranger!',
        content: 'This is a custom alert component',
        type: 'info'
      },
      {
        heading: 'Beware of the consequences',
        content: 'You are about to delete your account',
        type: 'warning'
      },
      {
        heading: 'Sorry!',
        content: 'Something prevented us from executing the order',
        type: 'error'
      }
    ];

    const onlyHeadings = [
      {
        heading: 'Sorry!',
      },
      {
        heading: 'Welcome, stranger!',
        type: 'info'
      },
      {
        heading: 'Beware of the consequences',
        type: 'warning'
      },
      {
        heading: 'Sorry!',
        type: 'error'
      }
    ];


    return (
      <div>
        <h2>A) Basic types (info, warning, error, [none])</h2>
        <Alerts items={types} />
        <h2>B) No content provided (info, warning, error, [none])</h2>
        <Alerts items={onlyHeadings} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
