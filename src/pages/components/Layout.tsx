import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";

import JTable from "./JTableold";
import JFooter from "./JFooter";


//import Homebar from "./Homebar";

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
        //background:'',
        maxHeight: '100%',
    },
    footer:{
        padding: '8px',
        //margin: '0px auto 0px auto',
    },
    paper:{padding: '8px',
            margin: '20px 8px',
            background: 'grey', 
},
    button:{},

}))


const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Grid container direction='column'                 
                 spacing={3}>
                        <Grid item xs={12}>
                            
                        </Grid>
                   
                     <Grid item container>
                        <Grid item xs={2}>
                            <Paper></Paper>
                        </Grid>
                        <Grid item xs={8}
                        >
                            <Paper elevation={1} className={classes.paper}>
                            <JTable  />
                            </Paper>
                            
                        </Grid>
                        <Grid item xs={2}>
                        <Paper></Paper>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item className={classes.footer} xs={12}>
                       <JFooter />
                    </Grid> 
                    
                
            </Paper>

        </div>
    )
}

export default Layout;