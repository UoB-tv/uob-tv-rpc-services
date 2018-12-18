import React from 'react'
import PropTypes from 'prop-types'

import {
    CssBaseline,
    Divider,
    AppBar,
    Toolbar,
    Paper,
    Drawer,
    Popover,
    Icon,
    IconButton,
    withStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    InputBase,
    Button
} from '@material-ui/core'

import { fade } from '@material-ui/core/styles/colorManipulator';

const sizes = {
    drawerSize: 280,
}
const styles = theme => ({
    root: {
        fontFamily: "Roboto",
        width: '100%',
    },
    drawer: {
        width: sizes.drawerSize,
    },
    drawerPaper: {
        width: sizes.drawerSize,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
        maxWidth: "480px",
        flexGrow: 1,
    },
    searchIcon : {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBase: {

    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
    },
    grow: {
        flexGrow: 1,
    },
    brand: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.unit*4,
        fontSize: "32px",
        color: theme.palette.secondary.main
    }
})

class Layout extends React.Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false,
        }

        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    }

    handleDrawerToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={ classes.root }>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.handleDrawerToggle}>
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap className={classes.brand}>
                            <Icon fontSize="large">tv</Icon>
                            uob.tv
                        </Typography>
                        <Button>
                            BROWSE
                        </Button>
                        <div className={classes.grow}></div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Icon>search</Icon>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.grow}>
                        </div>
                        <IconButton>
                            <Icon>account_circle</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.drawerOpen}
                    className={classes.drawer}
                    classes={{paper:classes.drawerPaper}}
                >
                    
                    <List>
                        <ListItem button onClick={this.handleDrawerToggle}>
                            <IconButton>></IconButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>list</Icon>
                            </ListItemIcon>
                            <ListItemText primary={'My Channels'} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon>camera</Icon>
                            </ListItemIcon>
                            <ListItemText primary={'Go Live'} />
                        </ListItem>
                    </List>
                </Drawer>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Layout)