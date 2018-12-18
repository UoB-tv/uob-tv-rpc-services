import React from 'react'
import PropTypes from 'prop-types'

import {
    withStyles,
    SvgIcon
} from '@material-ui/core'

const styles = (theme) => ({
    root: {
        display: 'inline-block'
    },
    icon: {
        backgroundRepeat: "no-repeat",
        margin: 0,
    },
    large: {
        width: 8 * theme.spacing.unit,
        height: 8 * theme.spacing.unit,
    },
    medium: {
        width: 6 * theme.spacing.unit,
        height: 6 * theme.spacing.unit,
    },
    small: {
        width: 4 * theme.spacing.unit,
        height: 4 * theme.spacing.unit,
    }
})
class UserAvatar extends React.PureComponent {

    static propTypes = {
        username: PropTypes.string,
        avatar: PropTypes.string,
    }
    constructor(props) {
        super(props)
    }
    render() {
        const { classes, username, avatar } = this.props
        return (
            <div className={classes.root}>
                <p className={classes.icon + " " + classes.small} style={{backgroundImage: `url(/static/avatars/${avatar || 1}.svg)`}}></p>
                {
                    username ? <span>{username}</span> : null
                }
            </div>
        )
    }
}

export default withStyles(styles)(UserAvatar) 