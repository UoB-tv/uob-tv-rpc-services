import React from 'react'
import PropTypes from 'prop-types'

import {
    TextField,
    Button,
    withStyles,
    Typography,
} from "@material-ui/core"

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    loginButton: {

    }
})

export class LoginForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    }
    
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            emailValid: false,
            passwordValid: false
        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        console.log("submittin form")
        if(this.props.onSubmit) {
            this.props.onSubmit(
                this.state.email,
                this.state.password,
            )
        }
    }
    
    handleEmailChange(e) {
        this.setState({
            email: e.target.value,
            emailValid: e.target.value != "",
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value,
            passwordValid: e.target.value != "",
        })
    }

    render() {
        const { classes } = this.props
        return (
            <form className={classes.root} onSubmit={this.handleFormSubmit}>
                <TextField 
                    label="Email address"
                    margin="normal"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <TextField
                    label="Password"
                    margin="normal"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <Typography variant="h6">
                    Don't have an account? Sign up here.
                </Typography>
                <Button
                    className={classes.loginButton}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={ !(this.state.emailValid && this.state.passwordValid) }
                >
                    Login
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(LoginForm)