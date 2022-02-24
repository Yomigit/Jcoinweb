import { Typography, makeStyles, Theme, createStyles, Grid, Paper} from "@material-ui/core";



const useStyles = makeStyles((theme:Theme) => createStyles({

    root:{},
    button:{},
    grid:{},
    paper:{
        padding: '8px',
       // margin: '20px 8px',
        background: '#F2F2EF',
        width: theme.spacing(32), 
        height: theme.spacing(16), 
},

}))

const Heroes = () => {
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={10}>
                <Grid item className={classes.grid} xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Typography>Heroes</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <Typography>Heroes</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );

}

export default Heroes