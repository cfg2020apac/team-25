import React, { FC, useState } from 'react';
import Sidebar from "react-sidebar";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import getDocumentReference from '../../Utils/getDocumentReference';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#2c2c34",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export interface TopNavProps {
  type: string
}

const TopNav: FC<TopNavProps> = (props) => {
  const classes = useStyles();
  const [sidebarOpen, setSideBarOpen] = useState(false);
  let {type} = props;
  if(type == "")
    type = "HandsOff";
  else if(type == "ngo")
    type = "Partner";
  else if(type == "admin")
    type = "Adminstrator";
  else if(type == "volunteer")
    type = "Volunteer";
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#2c2c34'}}>
        <Toolbar variant="dense">
          <button className={classes.menuButton} style={{backgroundColor: "inherit", boxShadow: 'none'}} aria-label="menu" onClick={() => {setSideBarOpen(true)}}>
            <MenuIcon/>
          </button>
          <Typography variant="h6" color="inherit">
            {type}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={sidebarOpen}
        onSetOpen={()=>{setSideBarOpen(!sidebarOpen)}}
        styles={{ sidebar: { background: "white" } }}
      >
      </Sidebar>
    </div>
  );
}
export default TopNav;
