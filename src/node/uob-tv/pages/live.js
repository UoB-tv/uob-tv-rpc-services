import React from 'react'

import {
    Grid,
    withStyles,
    Typography,
    Paper,
    
} from '@material-ui/core'
import {
    Layout,
} from '../layout'

import Link from 'next/link'

export class LivePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h4">
                                Going Live
                            </Typography>
                            <Typography variant="h5">
                                What do you need?
                            </Typography>

                            <Typography variant="h6">
                                A video streaming client
                            </Typography>
                            <p>
                                We recommend OBS (Open Broadcast Software) because it is free.
                            </p>
                            <p>
                                <Link href="https://obsproject.com/">https://obsproject.com/</Link>
                            </p>
                            <Typography variant="h6">
                                Your stream key
                            </Typography>
                            <p>
                                The stream key is unqiue for every user, you should not share this with any one.
                            </p>
                            <p>
                                
                            </p>
                        </Grid>
                    </Grid>
            </Layout>
        )
    }
}

export default LivePage