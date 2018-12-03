import React, { Component } from 'react'
import { URLInput } from '../components'
import ReactHLS from 'react-hls';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {URL: ''};
        this.handleURLChange = this.handleURLChange.bind(this);
    
    }

    handleURLChange(value) {
        console.log(value);
        this.setState({URL:value});
    }

    render() {
        return (
            <div>
                Home Page
            </div>
        )
    }
}