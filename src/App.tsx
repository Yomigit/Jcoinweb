import React, { useCallback, useState } from 'react';

//import { makeStyles, createStyles, Theme } from '@material-ui/core';
//import HeadBar from './components/HeadBar';
import { BrowserRouter as Router,  Redirect,  Route, Switch,  /* RouteComponentProps */ } from 'react-router-dom';
import HeadBar from './pages/components/HeadBar';
import Home from './pages/components/Home';
import Login from './pages/components/Login';
import Profile from './pages/components/Profile';
import Logout from './pages/components/Logout';
import LandingPage from './pages/components/Landing';
import Signup from './pages/components/Signup';

import Dialogalert from './pages/components/Dialogalert';
import {authContext} from './pages/components/authContext'

/* const useStyles = makeStyles((theme:Theme) => createStyles({
  root:{ background: '',
  flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2, 3),
},
  paper:{},
  button:{},
}))
 */

function App() {
  //const classes = useStyles();

    const [isLoggedin, setisLoggedin] = useState(false)

    const login = useCallback(() => {
      setisLoggedin(true)
    }, [])


    const logout = useCallback(() => {
      setisLoggedin(false)
    }, [])


    let droutes;

    if(isLoggedin) {
      droutes = (
        <Switch>
        <Route exact={true} path='/' render={(props:any) =><Home {...props} />}/>
        <Route exact={true} path='/profile' render={(props:any) =><Profile {...props} />}/>
        <Route exact={true} path='/logout' render={(props:any) =><Logout {...props} />}/>   
        <Route exact={true} path='/landing' render={(props:any) =><LandingPage {...props} />}/>       
        <Redirect to='/landing'/> 
        </Switch>
      )
    } else {
      
      droutes = (
        <Switch>        
        <Route exact={true} path='/' render={(props:any) =><Home {...props} />}/>
        <Route exact={true} path='/login' render={(props:any) =><Login {...props} />}/>       
        <Route exact={true} path='/signup' render={(props:any) =><Signup {...props} />}/>        
        <Route exact={true} path='/dialogalert' render={(props:any) =><Dialogalert {...props} />}/>        
       <Redirect to='/login'/> 
      </Switch>    
      )

    }


  return (
    
     <authContext.Provider value={{isLoggedin, 
      login:login, logout:logout}}>
      <Router>          
      <HeadBar />
      <main>{droutes}</main>
      </Router>  
      </authContext.Provider>   
     
      
  );
}

export default App;
