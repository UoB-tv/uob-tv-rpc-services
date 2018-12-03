import React, { Component } from 'react'
import { URLInput } from '../components'
import ReactHLS from 'react-hls';

export class HLSPlayerPage extends Component {
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
                    <h2>HLS playback</h2>  
                    <ReactHLS url={this.state.URL} />
                </div>
            </div>
        )
    }
}