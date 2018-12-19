import React from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    withStyles
} from '@material-ui/core'

import ReactPlayer from 'react-player'

const styles = theme => ({
    playerContainerResponsive: {
        height: "inherit",
        maxWidth: 700,
    },
    large: {

    },
    medium: {

    },
})

export class MediaPlayer extends React.Component {
    static propTypes = {
        url: PropTypes.string,
        responsive: PropTypes.bool,
        size: PropTypes.string,
        showMetadata: PropTypes.bool,
        metadata: PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.handleHover = this.handleHover.bind(this)
    }

    render() {
        const { responsive, classes,...rest } = this.props
        return responsive ? this.renderResponsivePlayer() : this.renderNormalPlayer()
    }
    handleHover() {
        console.log("hover")
    }
    renderNormalPlayer() {
        const { classes, responsive, showMetadata, ...rest } = this.props
        return (
            <div>
                <ReactPlayer
                    {...rest}
                    onMouseEnter={this.handleHover}
                />
            </div>
        )
    }

    renderResponsivePlayer() {
        const { classes, showMetadata, ...rest } = this.props
        return (
            <div className={classes.playerContainerResponsive}>
                <ReactPlayer
                    {...rest}
                    responsive="true"
                    width="100%"
                    height="100%"
                    onMouseEnter={this.handleHover}
                />
            </div>
        )
    }
}

export default withStyles(styles)(MediaPlayer)