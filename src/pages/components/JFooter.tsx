import { makeStyles, createStyles, Theme, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
        flexGrow: 1,

        /* display:'flex',
        flexWrap: 'wrap', 
        alignItems: 'center',
        justifyItems: 'center', 
        padding: '8px', */
        margin: '20px auto 20px auto',

    },

    grid:{ },

    paper:{
            padding: '8px',
           // margin: '20px 8px',
            background: 'grey',
            width: theme.spacing(32), 
            height: theme.spacing(16), 
    },
    button:{},
}))
        // justifyContent='center' alignItems='center' 

const JFooter = () => {
    const classes = useStyles();

   return (
       <div className={classes.root}>
           <Grid container direction='row' spacing={3} justifyContent='center' alignItems='center' >               
            
            
               <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Typography>
                            FOOTER 
                        </Typography>  
                    </Paper>
               </Grid>                 
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={4} >
                    <Paper className={classes.paper}>
                    </Paper>
                </Grid>         
        
           </Grid>
           
       </div>
            
)
}

export default JFooter;
