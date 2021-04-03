import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Add, Dashboard, Edit } from '@material-ui/icons';
import React, { useState } from 'react';
import AddMobile from '../AddMobile/AddMobile';
import EditMobile from '../EditMobile/EditMobile';
import ManageMobile from '../ManageMobile/ManageMobile';
import './Admin.css'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Admin() {
    const classes = useStyles();
    const [property, setProperty] = useState("manage");
    console.log(property);

    const handleAdd = () => {
        setProperty("add")
    }

    const handleManage = () => {
        setProperty("manage")
    }

    const handleEdit = () => {
        setProperty("edit")
    }

    return (

        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <Toolbar />
                <div className={classes.drawerContainer}>
                    <Typography variant="h5">Mobile Paradise</Typography>
                    <List>

                        <ListItem button onClick={handleManage}>
                            <ListItemIcon><Dashboard></Dashboard></ListItemIcon>
                            <ListItemText primary="Manage Mobiles" />
                        </ListItem>
                        <ListItem button key="Add Mobile" onClick={handleAdd}>
                            <ListItemIcon><Add></Add></ListItemIcon>
                            <ListItemText>
                                Add Mobile
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={handleEdit}>
                            <ListItemIcon><Edit></Edit></ListItemIcon>
                            <ListItemText primary="Edit Mobile Detail" />
                        </ListItem>

                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>

                <Toolbar />
                {
                    property === "add" ? <AddMobile></AddMobile> : 
                    property === "edit" ? <EditMobile></EditMobile> :
                    <ManageMobile></ManageMobile>
                }
            </main>
        </div>
    );
}
