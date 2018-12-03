import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  CssBaseline,
  withStyles
} from '@material-ui/core';

import {
  HomePage,
  MP4PlayerPage,
  HLSPlayerPage,
} from './pages';

import './App.css';

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>UOB-TV Internal Demo</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
          <div className={classes.toolbar}></div>
          <Divider />
          <List>
            <ListItem><ListItemText><Link to="/hls">HLS Player</Link></ListItemText></ListItem>
            <ListItem><ListItemText><Link to="/mp4">MP4 Player</Link></ListItemText></ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}></div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/hls' component={HLSPlayerPage} />
          <Route exact path='/mp4' component={MP4PlayerPage} />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
