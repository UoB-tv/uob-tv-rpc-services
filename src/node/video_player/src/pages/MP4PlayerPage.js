import React, { Component } from 'react'
import { URLInput } from '../components'
import ReactHLS from 'react-hls';

export class MP4PlayerPage extends Component {
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
                <URLInput onSubmit={this.handleURLChange}/>
                <div>
                    <h2>MP4 Playback</h2>
                    <video controls src={this.state.URL} />
                </div>
            </div>
        )
    }
}