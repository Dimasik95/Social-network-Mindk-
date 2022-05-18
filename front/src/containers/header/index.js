import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, Button, Box, Avatar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import { makeStyles } from "@material-ui/styles";
import Article from '../../components/article'
import AuthForm from '../../components/auth'

const useStyles = makeStyles(() => ({
    root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1
        },
}));

const Head = () => {
    const authenticated = true;
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (authenticated === false) {
    return ( 
        <>
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>MindK web</Typography>
                    <Box mr={10}>
                        <Button color='inherit' variant="outlined"
                        onClick={handleOpen}>Sign In</Button>

                        <Dialog open={open} onClose={handleClose} arial-labelledby="auth-form">
                            <DialogTitle id="auth-form">Sign In</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Sign up in Google or Facebook</DialogContentText>
                               <AuthForm />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cancel</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Link to='/articles'>
                        <Button color='secondary' variant="contained">Log out</Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
} else {
    return (
        <>
                <AppBar position='fixed'>
                        <Container>
                                <Toolbar>
                                    <Typography variant='h6' className={classes.title}>MindK web</Typography>
                                    <Box mr={30}>
                                            <Button color='inherit' variant='outlined' onClick={handleOpen}>Add article</Button>
                                            <Dialog open={open} onClose={handleClose} aria-labelledby='add-article-form'>
                                                <DialogTitle id='add-article-form'>Add article</DialogTitle>
                                                <DialogContent>
                                                    <Article />
                                                </DialogContent>
                                            </Dialog>
                                    </Box>
                                    <Box mr={1}>
                                            <Avatar alt={name} src={`http://localhost:3030/`} sx={{width: 50, height: 50}} />
                                    </Box>
                                    <Button color='secondary' variant='contained'>Dmytro Yaroshenko</Button>
                                </Toolbar>
                        </Container>
                </AppBar>
            </>
    );
}
};


export default Head; 