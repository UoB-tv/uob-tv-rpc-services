import React from 'react'

import {
    Layout
} from '../layout'
import { 
    Typography,
    Grid,
    withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
    container: {
        paddingTop: theme.spacing.unit * 8,
        paddingLeft: theme.spacing.unit * 8,
        paddingRight: theme.spacing.unit * 8
    },
    userInfo: {
        paddingTop: theme.spacing.unit * 4,
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4
    }
})

var ChannelPage = (props) => (
    <Layout activeMenu={'home'}>
        <div className={props.classes.userInfo}>
            <Typography variant="h6">jlasf's channel</Typography>
        </div>
        <div className={props.classes.container}>
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <Typography variant="h2">COMSM3023</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">
                    Hi, welcome to my channel. I stream lots of lectures. Check these videos out. You can find past lectures on here.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Live
                    </Typography>
                </Grid>
                <Grid container>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        Uploads
                    </Typography>
                </Grid>
                <Grid container>
                    
                </Grid>
            </Grid>
        </div>
    </Layout>
)

export default withStyles(styles)(ChannelPage)