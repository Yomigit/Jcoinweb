import { Grid, Typography, makeStyles, 
    createStyles, Theme, Box, 
    Table, TableBody, 
    TableCell, TableHead, TableRow} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{

    },
    assetsbox:{
        width:theme.spacing(30),
        height:theme.spacing(16),
        background:'#9381FF',
        borderRadius:'10px',
        color:'white',
        marginLeft:theme.spacing(4)        
    },
    assetswhbox:{
        width:theme.spacing(30),
        height:theme.spacing(16),
        background:'#bdc3c7',
        borderRadius:'10px',
        marginLeft:theme.spacing(4)
        
    },
    activitybox: {
        width:theme.spacing(80),
        height:theme.spacing(20),
        background:'#9381FF',
        color:'white',
        borderRadius:'10px',
        marginLeft:theme.spacing(4)
        
    },
    box:{
        width:theme.spacing(40),
        background:'#9381FF',
        color:'white',
        borderRadius:'10px',
        marginLeft:theme.spacing(4),
        marginBottom:theme.spacing(4)
    },
    typosection:{        
        fontSize:'16px', 
        fontWeight:'bold',
        marginLeft:theme.spacing(2),
        marginBottom:theme.spacing(1)       
        
    },
    typoasset:{
        marginLeft:theme.spacing(2),
        fontSize:'16px', 
        fontWeight:'bold',
        
    },
    typoasset21:{
        marginLeft:theme.spacing(2),
        fontSize:'16px', 
        fontWeight:'bold',
        color:'#9381FF'
    },
    typoasset22:{
        marginLeft:theme.spacing(2),
        fontSize:'32px', 
        fontWeight:'bold',
        color:'#9381FF'
    },

    typoasset2:{
        marginLeft:theme.spacing(2),
        fontSize:'32px', 
        fontWeight:'bold',
        color:'white'
    },
    typospan:{
        marginTop:'0px'
    },
    
    section:{
        marginBottom:theme.spacing(3)
    },
    tablecell:{

        fontSize:'10px',
        color:'white'
         
    },
    tablerow:{
        height:'12px'
    },
    span:{
        marginLeft:theme.spacing(2),
        fontSize:'14px',
        color:'white'
    },
    span1:{
        marginLeft:theme.spacing(2),
        fontSize:'14px',
        fontWeight:'bold',
        color:'#9381FF'
    },
    span11:{
        marginLeft:theme.spacing(2),
        fontSize:'14px',
        color:'green'
        
    },
    span12:{
        marginLeft:theme.spacing(2),
        fontSize:'14px',
        color:'red'        
    },
    span13:{
        marginLeft:theme.spacing(3),
        fontSize:'14px',
        color:'orange'  
    },

}))
const DashBoard = () => {
    const classes = useStyles();

    const hdnamesactivities = [ 
        {id:"1", name:"Transaction"}, 
        {id:"2", name:"Amount"}, 
        {id:"3", name:"Total"},
        {id:"4", name:"Status"},
        {id:"5", name:"Date"}];

    const hdnamecoinlatests = [ 
            {id:"1", name:"Cryptocoin"}, 
            {id:"2", name:"Updated"}, 
            {id:"3", name:"Change"},
            {id:"4", name:"Price"}];
        
    const tablsactivitys = [
                {   
            id: 'BTC',
            transaction: 'Bitcoin',
            amount: '506 BTC',
            total: 'USD$ 50,000',
            status: 'pending',
            date: 'January 22, 2021'
          },
          
          {
            id: 'ETH',    
            transaction: 'Ethereum',
            amount: '806 ETH',
            total: 'USD$ 10,000',
            status: 'Done',
            date: 'February 2, 2021'
          }/* ,
          
          { id: 'XRP',
            name: 'Ripple',
            price: '1.28525932',
            rank: '4'
          } */
            ];
          
            const tablcoinlatests = [
                {   id: 'BTC',
            name: 'Bitcoin',
            updated:'1 minute ago',
            change:'-2.3%',
            price: '47717.64'            
          }];


    return (
        <div>
            <Grid container direction='column'>  
                <div className={classes.section}>             
                    <Typography className={classes.typosection}>Assets</Typography>
                    <Grid item container direction='row'>
                        <Grid><Box className={classes.assetsbox}>
                            <Typography className={classes.typoasset}>Bitcoin</Typography>
                            <Typography className={classes.typoasset2}>$50,000</Typography>
                            <div><span className={classes.span}>Profit</span> <span className={classes.span}>Loss</span> <span className={classes.span}>Neutral</span></div>
                            <div><span className={classes.span11}>+25%</span> <span className={classes.span12}>-2%</span> <span className={classes.span13}>23%</span></div>
                            </Box></Grid>
                        <Grid><Box className={classes.assetswhbox}>
                            <Typography className={classes.typoasset21}>Ethereum</Typography>
                            <Typography className={classes.typoasset22}>$10,000</Typography>
                            <div><span className={classes.span1}>Profit</span> <span className={classes.span1}>Loss</span> <span className={classes.span1}>Neutral</span></div>
                            <div><span className={classes.span11}>+25%</span> <span className={classes.span12}>-2%</span> <span className={classes.span13}>23%</span></div>
                            
                            </Box></Grid>
                        {/* <Grid><Box className={classes.assetsbox}></Box></Grid>
 */}                    </Grid>
                </div> 
                <div className={classes.section}>
                    <Typography className={classes.typosection}>Activity</Typography>
                    <Grid item container direction='row'>
                        <Grid><Box className={classes.activitybox}>
                        <Table aria-label="simple table">
                            
                            <TableHead>
                                <TableRow className={classes.tablerow}>
                                    {hdnamesactivities.map(hdnamesactivitie => 
                                    <TableCell className={classes.tablecell} key={hdnamesactivitie.id}>{hdnamesactivitie.name}</TableCell> )}                
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                    {tablsactivitys.map(tablsactivity => <TableRow className={classes.tablerow} key={tablsactivity.id}>

                                    <TableCell className={classes.tablecell}>{tablsactivity.transaction}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablsactivity.amount}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablsactivity.total}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablsactivity.status}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablsactivity.date}</TableCell>
                                </TableRow>)}
                            </TableBody>
                           
                        </Table>
                            
                            </Box>
                            </Grid>                      
                    </Grid>
                </div>
                <div>
                    
                        

                        <Table className={classes.box} aria-label="simple table">
                            
                            <TableHead>
                                <TableRow className={classes.tablerow}>
                                    {hdnamecoinlatests.map(hdnamecoinlatest => 
                                    <TableCell className={classes.tablecell} key={hdnamecoinlatest.id}>{hdnamecoinlatest.name}</TableCell> )}                
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                    {tablcoinlatests.map(tablcoinlatest => <TableRow className={classes.tablerow} key={tablcoinlatest.id}>

                                    <TableCell className={classes.tablecell}>{tablcoinlatest.name}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablcoinlatest.updated}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablcoinlatest.change}</TableCell>
                                    <TableCell className={classes.tablecell}>{tablcoinlatest.price}</TableCell>
                                </TableRow>)}
                            </TableBody>
                           
                        </Table>
                        
                                        

                </div>
                <div>
                    
                </div>
            </Grid>
            
        </div>
    )



}

export default DashBoard