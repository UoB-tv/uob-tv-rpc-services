import React from 'react'
import PropTypes from 'prop-types'


import {
    Grid,
    withStyles,
    Typography,
    ButtonBase,
} from '@material-ui/core'
import {
    Layout
} from '../layout'

import { 
    MediaPlayer,
    MediaThumbnail,
} from '../components'

const styles = theme => ({
    playerContainer: {
        width: "100%",
        padding: 0,
        maxHeight: "480",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    pageSection: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    pageInnerSection: {
        padding: theme.spacing.unit * 2
    }
})

export class IndexPage extends React.Component {
    constructor(props) {
        super(props)

        this.metadata= {
            title: "Static Video Test",
        }

        this.popularStreams = [
            {
                id: "1",
                thumbnailImage: "/static/avatars/1.png",
                title: "Stream name",
                description: "Stream description, blah blah, blah",
                timestampStarted: 1545226749847,
            },
            {
                id: "2",
                thumbnailImage: "/static/avatars/2.png",
                title: "Stream name",
                description: "Stream description, blah blah, blah",
                timestampStarted: 1545226749847,
            },
            {
                id: "3",
                thumbnailImage: "/static/avatars/3.png",
                title: "Stream name",
                description: "Stream description, blah blah, blah",
                timestampStarted: 1545226749847,
            },
            {
                id: "4",
                thumbnailImage: "/static/avatars/4.png",
                title: "Stream name",
                description: "Stream description, blah blah, blah",
                timestampStarted: 1545226749847,
            }
        ]

        this.handleMediaThumbnailClick = this.handleMediaThumbnailClick.bind(this)
    }

    handleMediaThumbnailClick(media) {
        console.log(media)
    }
    render () {
        const { classes } = this.props
        return (
            <Layout activeMenu={'home'}>
                <Grid container>
                    <Grid item xs={12} className={classes.playerContainer}>
                        <MediaPlayer
                            //url="http://35.241.0.213/vods/i0as8id8f0adf/manifest.m3u8"
                            url="https://video-cdn.uob-tv.co.uk/vods/i0as8id8f0adf/manifest.m3u8"
                            controls
                            responsive={true}
                            showMetadata
                            metadata={this.metadata}
                            playsinline
                            live={true}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.pageSection}>
                        <Grid container spacing={8} className={classes.pageInnerSection}>
                            <Grid item xs={3} key="test-stream"></Grid>
                                <MediaPlayer
                                //url="http://35.241.0.213/vods/i0as8id8f0adf/manifest.m3u8"
                                url="https://live-playback.uob-tv.co.uk/test-stream/segments.m3u8"
                                controls
                                showMetadata
                                metadata={{title: "test-stream"}}
                                playsinline
                                live={true}
                                />
                            </Grid>
                            <Grid item xs={3} key="8888">
                                <MediaPlayer
                                //url="http://35.241.0.213/vods/i0as8id8f0adf/manifest.m3u8"
                                url="https://live-playback.uob-tv.co.uk/8888/segments.m3u8"
                                controls
                                showMetadata
                                metadata={{test: "Your Live Stream"}}
                                playsinline
                                live={true}
                                />
                                <Typography variant="h6">
                                    You can stream to rtmp://ingest.uob-tv.co.uk/live/stream with stream key: test1235
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            </Layout>
        )
    }
}


export default withStyles(styles)(IndexPage)