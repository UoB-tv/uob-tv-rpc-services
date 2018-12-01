import React, { Component } from 'react';
import './App.css';
import ReactHLS from 'react-hls';

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {URL: ''};

    this.handleURLChange = this.handleURLChange.bind(this);
  }
  handleURLChange(value) {
    this.setState({URL:value});
  }
  render() {
    return (
      <div className="App">
        <URLInput onSubmit={this.handleURLChange}/>
        <ReactHLS url={this.state.URL} />
      </div>
    );
  }
}

export default App;
