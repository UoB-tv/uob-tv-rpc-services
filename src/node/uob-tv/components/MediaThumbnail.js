import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        textAlign: "left",
    },
    imageFrame: {
        width: "100%",
        paddingBottom: "75%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundColor: "black",
        backgroundSize: "cover",
        marginBottom: theme.spacing.unit,
    },
    image: {
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: theme.typography.fontSize + 2,
    },
    description: {
        fontWeight: 400,
        fontSize: theme.typography.fontSize
    }
})

export class MediaThumbnail extends React.PureComponent {
    static propTypes = {
        media: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { media, classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.imageFrame} style={{backgroundImage: `url(${media.thumbnailImage})`}}>
                </div>
                <Typography className={classes.title}>
                    {media.title}
                </Typography>
                <Typography className={classes.description}>
                    {media.description}
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(MediaThumbnail)