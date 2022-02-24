import {Typography, Grid, makeStyles, createStyles, Theme, Paper} from "@material-ui/core";
import DashBoard from "./DashBoard";
import Profile from "./Profile";
import SideMenu from "./SideMenu";


const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
        marginTop:theme.spacing(2)
    },
    button:{},
    paper:{
        height:theme.spacing(70),
        background:'light gray'
    },
    
}))

const Landing = (props:any) => {

        const classes = useStyles()

   return (<div className={classes.root}>
    <Typography variant='h6'></Typography>

    <Grid container direction='row' className={classes.root} >
        <Grid item sm={2}>
            
            <Paper variant='outlined' elevation={3} className={classes.paper}>
                
                <SideMenu />
            </Paper>
        </Grid>
        <Grid item sm={8}>            
            <Paper variant='outlined' className={classes.paper}>                
                <DashBoard />
            </Paper>
        </Grid>
        <Grid item sm={2}>
        
        <Paper variant='outlined' elevation={3} className={classes.paper}>

            <Profile />
        </Paper>
        </Grid>

    </Grid>

    </div>)
}

export default Landing;