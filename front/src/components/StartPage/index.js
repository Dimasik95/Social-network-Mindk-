import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import AuthForm from '../auth';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        },
    content: {
            marginTop: 250,
            textAlign: 'center',
            flexGrow: 1,
    },
}));

const StartPage = () => {
    const classes = useStyles();
    return (
        <>
            <Grid 
                    className={classes.content}
                    container
                    flexDirection='column'
                    aliginContent='center'
            >
                    <Grid item>
                        <Box>
                            <Typography
                                    color='textPromary'
                                    fontSize={30}
                                    aligin='center'
                                    marginBottom={8}
                                    className={classes.paragraph}
                            >
                                Please authorize to continue
                            </Typography>
                        </Box>
                        <AuthForm />
                    </Grid>
            </Grid>
        </>
    );
};

export default StartPage;