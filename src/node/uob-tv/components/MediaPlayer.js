import React from 'react'
import PropTypes from 'prop-types'

import ReactPlayer from 'react-player'

import {
    withStyles,
    Typography
} from '@material-ui/core'

import {
    LiveBadge,
} from '../components'

const styles = theme => ({
    playerContainerResponsive: {
        height: "inherit",
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    playerContainerInner: {
        maxWidth: 700
    },
    large: {

    },
    medium: {

    },
    metadataOverlay: {
        pointerEvents: "none",
        position: "absolute",
        width: "inherit",
        height: "inherit",
        top: 0,
        left: 0,
        padding: 2 * theme.spacing.unit,
        display: "flex",
        justifyContent: 'space-between'
    }
})

export class MediaPlayer extends React.Component {
    static propTypes = {
        url: PropTypes.string,
        responsive: PropTypes.bool,
        size: PropTypes.string,
        showMetadata: PropTypes.bool,
        metadata: PropTypes.object,
        live: PropTypes.bool,
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

    renderMetadataOverlay() {
        const { metadata, classes, live } = this.props
        return this.props.showMetadata ? (
            <div className={classes.metadataOverlay}>
                <Typography variant="h5">
                    { metadata.title }
                </Typography>
                { live? <LiveBadge /> : null}
            </div>
        ) : null
    }
    renderResponsivePlayer() {
        const { classes, showMetadata, metadata, live, ...rest } = this.props
        return (
            <div className={classes.playerContainerResponsive}>
                { this.renderMetadataOverlay() }
                <div className={classes.playerContainerInner}>
                    <ReactPlayer
                        {...rest}
                        responsive="true"
                        width="100%"
                        height="100%"
                        onMouseEnter={this.handleHover}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MediaPlayer)