import  Button  from '@material-ui/core/Button';
import {makeStyles, createStyles, Theme} from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: { 
      flexGrow:1,
    },
    paper: { /* ... */ },
    button: { color: "blue", background:"red" },
  }));

const Homebar = () => {
    const classes = useStyles()
    return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>Hello</Button>
      </div>  
      )
    
}

export default  Homebar;