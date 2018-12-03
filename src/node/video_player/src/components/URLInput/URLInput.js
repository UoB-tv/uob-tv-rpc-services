import React from 'react'
import './URLInput.css'

export class URLInput extends React.Component {
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
                URL:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }