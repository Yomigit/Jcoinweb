import {Typography,  Avatar,
makeStyles, createStyles, 
Theme, Link, Divider, Button} from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => createStyles({

    root:{},
    avartarsize:{
        width:theme.spacing(12),
        height:theme.spacing(12),
        
        /* marginLeft:theme.spacing(5),
        marginTop:theme.spacing(2) */
    },
    avartarbox:{
        marginTop:theme.spacing(2),
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
        
    },
    profiletypo:{
        fontSize:'18px',              
        fontWeight:'bold',  
        textAlign:'center',      
        marginTop:theme.spacing(2),
             
    },

    typogeneral:{        
        fontSize:'15px', 
        fontWeight:'bold', 
        
    },
    typosection:{        
        fontSize:'16px', 
        fontWeight:'bold',
        marginLeft:theme.spacing(2), 
        
    },
    tradertypo:{    
        fontSize:'15px',                    
        textAlign:'center', 
        fontWeight:'bold',  
        marginTop:theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    link:{
        fontSize:'15px',         
    },
    traderitems:{
        fontSize:'12px', 
        
        marginLeft:theme.spacing(2),
    },
    
    span:{
        fontSize:'12px', 
        color:'blue',
        marginLeft:theme.spacing(2),
    },
    typosectionspace:{
        marginBottom: theme.spacing(2)
    },
    assetsitems:{
        fontSize:'12px', 
        color:'light gray',
        marginLeft:theme.spacing(2),
    },
    assetsspan:{
        fontSize:'12px', 
        fontWeight:'bold',        
        marginLeft:theme.spacing(2),
    },
    button:{
        textTransform: "none",
        
        
    },
    buttonbox:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        VerticalAlign:'bottom',
        height:'80px'
    }


}));


const Profile = (props:any) => {
        const classes = useStyles();

   return (<div>
   <Typography className={classes.profiletypo}>Trader Profile</Typography>

    <div className={classes.avartarbox}>
        <Avatar src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.avartarsize}></Avatar>
        
    </div>
    <Typography className={classes.tradertypo}>Tunde Oni</Typography>  
        <div className={classes.avartarbox}>
            <Link href='#' className={classes.link}>Edit Profile</Link>
        </div>
        <Divider />
        <Typography className={classes.typosection}>Account</Typography>
        <div>
            <Typography className={classes.traderitems}>Joined: <span className={classes.span}>June 15, 2021</span> </Typography>
        </div>
        <div className={classes.typosectionspace}>
            <Typography className={classes.traderitems}>Assets Total: <span className={classes.span}>$100,000</span> </Typography>
        </div>
      
        <div>
             <Divider />                    
            <Typography className={classes.typosection}>Assets</Typography>
            <Typography className={classes.assetsitems}>Bitcoin: <span className={classes.assetsspan}>26.50 BTC</span> </Typography>
            <Typography className={classes.assetsitems}>Ethereum: <span className={classes.assetsspan}>100.60 ETH</span> </Typography>
            <Typography className={classes.assetsitems}>Doge: <span className={classes.assetsspan}>10,226.50 DOGE</span> </Typography>
            <Typography className={classes.assetsitems}>Ripple: <span className={classes.assetsspan}>626.50 XRP</span> </Typography>
            <div className={classes.avartarbox}>
                <Link href='#' className={classes.link}>More Assets</Link>
            </div>
            <div className={classes.buttonbox}>

                <Button className={classes.button} variant='contained' color='primary' size='small'>&nbsp; Trade Now &nbsp;</Button>
            </div>
        </div>
        
</div>)
}

export default Profile;