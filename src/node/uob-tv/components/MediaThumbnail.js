import React from 'react'
import PropTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({

})

export class MediaThumbnail extends React.PureComponent {
    static propTypes = {
        media: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { media } = this.props.media
        return (
            <div>
                <div>
                    <img src={media.thumbnailImg}/>
                </div>
                <Typography>
                    {media.title}
                </Typography>
                <Typography>
                    {media.description}
                </Typography>
            </div>
        )
    }
}

export default withStyles(styles)(MediaThumbnail)