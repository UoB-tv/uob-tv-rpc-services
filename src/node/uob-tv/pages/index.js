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
    Carousel,
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
            title: "Bunny",
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
                            url="https://storage.googleapis.com/uob-tv-videos-public/vods/i0as8id8f0adf/manifest.m3u8"
                            controls
                            responsive={true}
                            showMetadata
                            metadata={this.metadata}
                            playsinline
                            live={true}
                        />
                    </Grid>
                    { false ? 
                    <Grid item xs={12} className={classes.playerContainer}>
                        <MediaPlayer
                            url="http://127.0.0.1:8080/playlist.m3u8"
                            controls
                            responsive={true}
                            showMetadata
                            metadata={this.metadata}
                            playsinline
                            config={{
                                file : {
                                    forceHLS: true
                                }
                            }}
                            
                        /> 
                    </Grid> : null
                    }
                    
                    <Grid item xs={12} className={classes.pageSection}>
                        <Typography variant="h6">
                            Popular Live Streams
                        </Typography>
                        <Grid container spacing={8} className={classes.pageInnerSection}>
                            {
                                this.popularStreams.map(stream => (
                                    <Grid item xs={3} key={stream.id}>
                                        <ButtonBase
                                            onClick={this.handleMediaThumbnailClick}
                                        >
                                            <MediaThumbnail media={stream} />
                                        </ButtonBase>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}

export default withStyles(styles)(IndexPage)