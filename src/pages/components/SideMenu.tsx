//import {}from  '@material-ui/icons';    

import { makeStyles, 
    createStyles, 
    Theme, 
    Typography,
    MenuList,    
    MenuItem, 
    Icon,
    Paper,
    Button} from "@material-ui/core";




    const menuWidth = '200px'
const useStyles = makeStyles((theme:Theme) => createStyles({
        root:{
                width:menuWidth
        },
        typo:{
            fontSize:'15px',
            marginLeft:theme.spacing(1)
        },
        button:{
            textTransform: "none",
            
            
        },
        buttonbox:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            VerticalAlign:'bottom',
            height:'650px'
        }
}))

const SideMenu = () => {
    const classes = useStyles();

    return(
        <div>
            <Paper className={classes.root}>
                <MenuList>
                    <MenuItem>
                        <Icon style={{fontSize:15}}>home</Icon> 
                        <Typography className={classes.typo}>Home</Typography>                                       
                    </MenuItem>
                    <MenuItem>
                        <Icon style={{fontSize:15}}>work</Icon> 
                        <Typography className={classes.typo}>Asset</Typography>                                       
                    </MenuItem>
                    <MenuItem>
                        <Icon style={{fontSize:15}}>price_change</Icon> 
                        <Typography className={classes.typo}>Live Trade</Typography>                                       
                    </MenuItem>
                    <MenuItem>
                        <Icon style={{fontSize:15}}>logout</Icon> 
                        <Typography className={classes.typo}>Logout</Typography>                                       
                    </MenuItem>
                </MenuList>               

            </Paper>
            <div className={classes.buttonbox}>

                <Button className={classes.button} variant='contained' color='primary' size='small'>&nbsp; &nbsp; Guide &nbsp; &nbsp;</Button>
            </div>
            
        </div>
    )


}


export default SideMenu;