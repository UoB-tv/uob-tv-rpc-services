import React from 'react'

import {
    withStyles, Typography
} from "@material-ui/core"

const styles = theme => ({
    redDot: {
        borderRadius: theme.spacing.unit * 1,
        height: theme.spacing.unit * 2,
        width: theme.spacing.unit * 2,
        backgroundColor: "red",
        display: "inline-block",
        marginRight: theme.spacing.unit,
    },
    root: {
        display: 'inline-block'
    }
})

export const LiveBadge = (props) => (
    <Typography className={props.classes.text}><span className={props.classes.redDot}></span>Live</Typography>
)

export default withStyles(styles)(LiveBadge) 