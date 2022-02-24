import Heroes from "./Heroes"
import JTable from "./JTable"
import JFooter from "./JFooter"
import { Grid, makeStyles, Theme, createStyles} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{},
    button:{},
    grid:{
        margin: theme.spacing(3, 0),
    }
}))


const Home = (props:any) => {
    const classes = useStyles();
    return (

           <>
            <Grid container direction='column' alignItems='center'>

                <Grid item className={classes.grid}>
                    <Heroes />
                </Grid>
                <Grid item container className={classes.grid}>
                    <Grid item xs={12} sm={2}>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <JTable />
                    </Grid>
                    <Grid item xs={12} sm={2}>

                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    <JFooter /> 
                </Grid>
            </Grid>

           
                       
        </>
    )

}

export default Home