import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
    Button,
    Menu,
    MenuItem,
    InputBase,
    Input,
    TextField,
} from '@material-ui/core'

import { fade } from '@material-ui/core/styles/colorManipulator';

import {
    LoginForm,
} from '../components'


const sizes = {
    drawerSize: 280,
    loginDrawerSize: 360,
}
const styles = theme => ({
    root: {
        fontFamily: "Roboto",
        width: '100%',
    },
    drawerLogin: {
        width: sizes.loginDrawerSize,
    },
    drawerLoginPaper: {
        width: sizes.loginDrawerSize,
        padding: theme.spacing.unit * 4,
    },
    drawer: {
        width: sizes.drawerSize,
    },
    drawerPaper: {
        width: sizes.drawerSize,
    },
    drawerBrand: {
        display: "flex",
        justifyContent: 'space-between',
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
    },
    loginText: {
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        fontWeight: "bold",
        textAlign: "center"
    },
    bristol: {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 4,
    }
})

class Layout extends React.Component {
    static sidebarMenuItems = [
        {
            "id": "home",
            "icon": "home",
            "text": "Home",
            "href": "/"
        },
        {
            "id": "my_channel",
            "icon": "list",
            "text": "My Channel",
            "href": "/my_channel"

        },
        {
            "id": "live",
            "icon": "camera",
            "text": "Go Live",
            "href": "/live"
        },
    ]
    static propTypes = {
        children: PropTypes.element.isRequired,
        activeSidebarItem: PropTypes.string,
    }

    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false,
            accountMenuOpen: false,
            loginOpen: false,
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
        this.handleAccountMenuToggle = this.handleAccountMenuToggle.bind(this)
        this.handleLoginToggle = this.handleLoginToggle.bind(this)
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this)
    }

    handleLoginToggle() {
        this.setState({
            loginOpen: !this.state.loginOpen,
        })
    }
    handleAccountMenuToggle() {
        this.setState({
            accountMenuOpen: !this.state.accountMenuOpen,
        })
    }

    handleDrawerToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        })
    }
    handleLoginFormSubmit(email, password) {
        console.log("logging in")
    }
    render() {
        const { classes, activeSidebarItem } = this.props
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
                        <Button>Browse</Button>
                        <div className={classes.grow}></div>
                        <form className={classes.search}>
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
                        </form>
                        <Button>Search</Button>
                        <div className={classes.grow}>
                        </div>
                        <Button onClick={this.handleLoginToggle}>
                            Login
                        </Button>
                        <Button onClick={this.handleAccountMenuToggle}>
                            <Icon>account_circle</Icon>
                            My Account
                        </Button>
                        <Menu
                            id="menu-appbar"
                            
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={this.state.accountMenuOpen}
                            onClose={this.handleAccountMenuToggle}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.drawerOpen}
                    className={classes.drawer}
                    classes={{paper:classes.drawerPaper}}
                >
                    
                    <List>
                        <ListItem className={classes.drawerBrand}>
                            <Typography variant="h6" color="inherit" noWrap className={classes.brand}>
                                <Icon fontSize="large">tv</Icon>{"  "}
                                <span>uob.tv</span>
                            </Typography>
                            <IconButton onClick={this.handleDrawerToggle}>
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {
                            Layout.sidebarMenuItems.map((item, index) => (
                                <Link key={item.id} href={item.href} as={item.href} prefetch>
                                    <ListItem
                                        key={item.id}
                                        button
                                        selected={item.id==activeSidebarItem}
                                    >
                                        <ListItemIcon>
                                            <Icon>{item.icon}</Icon>
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                </Link>
                            ))
                        }
                    </List>
                    <Divider />
                </Drawer>
                <Drawer
                    className={classes.drawerLogin}
                    classes={{ paper:classes.drawerLoginPaper }}
                    anchor="right"
                    open={this.state.loginOpen}
                    onClose={this.handleLoginToggle}
                >
                    <Typography variant="h4" className={classes.loginText}>
                        Log In
                    </Typography>
                    <LoginForm onSubmit={this.handleLoginFormSubmit}/>
                    <div className={classes.bristol}>
                        <img src="/static/bristol_larger_logo.png" style={{width: '70%'}} />
                    </div>
                </Drawer>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Layout)