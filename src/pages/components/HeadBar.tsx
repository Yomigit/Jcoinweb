import { AppBar, Toolbar, makeStyles, createStyles,
Theme, Typography, Button, IconButton, useTheme, useMediaQuery, Menu, /* MenuItem */} from "@material-ui/core";
import  MenuIcon  from '@material-ui/icons/Menu'
import {useHistory, withRouter} from 'react-router-dom';
import { useState, useContext } from "react";

import { authContext } from "./authContext";


//import Menu from "material-ui/Menu";

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
        flexGrow:1,
        maxWidth:'400',
    },
    appbar:{
        backgroundColor:'white',
        //backgroundColor:'7D67FF',
    },
    menubutton:{ 
        marginRight: theme.spacing(2),
    },
    button:{ 
       //marginRight: theme.spacing(2),
        margin: '0px 10px',
        textTransform: "none",
    },
    title:{
        color:'#EBEB04',        
        flexGrow:1,
        
    },
}))

    /* interface IhandleMenuClickProps {
        history: any;
    } */

const HeadBar = () => {

    const history = useHistory();
    //console.log(props)
    const authC = useContext(authContext)

        const classes = useStyles();
        const mtheme = useTheme();
        const isMatch = useMediaQuery(mtheme.breakpoints.down('sm'))
        const [anchorEl, setanchorEl] = useState(null)        
       //console.log(isMatch);
        //console.log(theme);

        /* 
        interface IarraymenuItems {
            id:number,        
            pagetitle: string,
            pageUrl: string
        }
 */

        /* 
        const arraymenuItems:IarraymenuItems[] = [{
            id:1,        
            pagetitle: 'Home',
            pageUrl: '/'
        }, 
        {
            id:2,        
            pagetitle: 'Login',
            pageUrl: '/login'
        }, 
       
        {
            id:3,         
            pagetitle: 'LandingPage',
            pageUrl: '/landingpage'
        },
        {   id:4,      
            pagetitle: 'Logout',
            pageUrl: '/logout'
        }
    ]
 */
        const handleMenu = (event:any) => {
            setanchorEl(event.currentTarget)
        }

         const handleMenuClick = (pageUrl:string) => {
             console.log(history)
             if(pageUrl === '/logout') {
                history.push('/login')
                authC.logout()        
                setanchorEl(null);

             } else {
            history.push(pageUrl);
            //history.pushState(pageUrl);
            setanchorEl(null);
             }
            
        }; 

        const handleClose = () => {
            setanchorEl(null);
        };

        const handleLogout = () => {
            history.push('/login')
            authC.logout()        
            setanchorEl(null);
        };

    return (
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="static">
                    <Toolbar>
                        
                        <Typography variant='h6' 
                        className={classes.title}>JCoin</Typography>
                      { isMatch ? <div>
                        {!authC.isLoggedin &&
                          (<Button className={classes.button} 
                          size='small' variant='contained' 
                          color='primary'>Sign-up</Button>)} 

                      <IconButton edge='start' 
                      className={classes.menubutton} 
                      onClick={handleMenu}>
                            <MenuIcon />                                
                        </IconButton>
                        <Menu id='simple-menu' 
                            anchorEl={anchorEl} 
                            anchorOrigin={{vertical:'top', horizontal:'right'}}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                                {/* {arraymenuItems.map((arraymenuItem, index) => 
                                {
                                const {pagetitle, pageUrl} = arraymenuItem

                                    //console.log(pageUrl);
                                    

                            return (<MenuItem key={index} 
                                onClick={() => handleMenuClick(pageUrl)}>
                                    {pagetitle}</MenuItem>)
                                        
                                })}  */}  

                                 
                        {/* {!authC.isLoggedin &&        
                        (<MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>)}

                        {!authC.isLoggedin &&
                        (<MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>)}

                        {authC.isLoggedin &&
                        (<MenuItem onClick={() => handleMenuClick('/landing')}>Landing Page</MenuItem>)}
                        
                        {authC.isLoggedin &&
                        (<MenuItem onClick={() => handleMenuClick('login')}>Logout</MenuItem>)}  */}
                            </Menu>
                        </div> : 
                        <div>
                        {!authC.isLoggedin && 
                        (<Button onClick={() => handleMenuClick('/login')} 
                        variant='contained'>Login</Button>)}

                        {!authC.isLoggedin && 
                        (<Button onClick={() => handleMenuClick('/signup')} 
                        className={classes.button} variant='contained' 
                        color='primary'>Sign-up</Button>)}

                        {authC.isLoggedin && 
                        (<Button onClick={() => handleLogout()} 
                        className={classes.button} variant='contained' 
                        color='secondary'>Logout</Button>)}
                        </div>}
                    </Toolbar>
                </AppBar>

            </div>        
)
};

export default withRouter(HeadBar);