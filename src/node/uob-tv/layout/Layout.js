import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { connect } from 'react-redux'
import {
    login,
    logout,
} from '../store/auth'

import { AuthenClient } from '../api'

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
    MenuList,
    MenuItem,
    InputBase,
    Input,
    TextField,
} from '@material-ui/core'

import { fade } from '@material-ui/core/styles/colorManipulator';
import { GoogleLogin } from 'react-google-login';

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
            "href": "/",
            "authenticated": false
        },
        {
            "id": "my_channel",
            "icon": "list",
            "text": "My Channel",
            "href": "/my_channel",
            "authenticated": true,
        },
        {
            "id": "live",
            "icon": "camera",
            "text": "Go Live",
            "href": "/live",
            "authenticated": true
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
            anchorEl: null,
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
        this.handleAccountMenuToggle = this.handleAccountMenuToggle.bind(this)
        this.handleLoginToggle = this.handleLoginToggle.bind(this)
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
        this.handleLoginFailure = this.handleLoginFailure.bind(this)
        this.authenClient = new AuthenClient("http://www.uob-tv.co.uj/api/v1")
    }

    handleLoginToggle() {
        this.setState({
            loginOpen: !this.state.loginOpen,
        })
    }

    handleAccountMenuToggle(event) {
        this.setState({
            accountMenuOpen: !this.state.accountMenuOpen,
            anchorEl: event.currentTarget,
        })
    }

    handleDrawerToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        })
    }
    handleLoginSuccess(googleUser) {
        console.log("login success")
        console.log(googleUser)
        const idToken = googleUser.getAuthResponse().id_token;
        console.log("idToken", idToken)
        this.authenClient.verifySignIn(idToken)
            .then(json => {
                console.log("verify_signin success")
                const accessToken = json.accessToken
                this.props.login(googleUser, accessToken)
            })
            .catch(error => {
                console.error("verify_signin failed", error)
            })
            .finally( () => {
                this.setState({
                    loginOpen: false,
                })
            })
    }
    handleLoginFailure(error) {
        console.log("login error")
        console.log(error)
    }
    render() {
        const { classes, activeSidebarItem, authenticated, user } = this.props
        const { anchorEl } = this.state
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
                        <Link href="/browse">
                            <Button>Browse</Button>
                        </Link>
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
                        <div>
                        {
                            !authenticated ?
                            <Button onClick={this.handleLoginToggle}>
                                Login
                            </Button>
                            :
                                <Button onClick={this.handleAccountMenuToggle}>
                                    <Icon>account_circle</Icon>
                                    My Account
                                </Button>
                        }
                        {   
                            authenticated ?
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
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
                            : null
                        }
                        </div>
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
                                (!item.authenticated || authenticated)?
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
                                : null
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
                    <GoogleLogin
                        clientId="536287490582-9j7apg3r8j9jbv1dpbkuuai9rfdr70f3.apps.googleusercontent.com"
                        buttonText="Login with UoB Account"
                        onSuccess={this.handleLoginSuccess}
                    />
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


function mapStateToProps(state) {
    return {
        user: state.auth.user,
        authenticated: state.auth.authenticated,
        profile: state.auth.profile,
    }
}
function mapPropsToDispatch(dispatch) {
    return {
        login: (user, token) => dispatch(login(user, token)),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(withStyles(styles)(Layout))