import { Dialog, DialogTitle, Button } from "@material-ui/core";
import { DialogActions, /* makeStyles, createStyles, Theme */ } from "@material-ui/core";

import  {useState}  from "react";
import { useHistory } from "react-router-dom";

/* const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{},
    //paper:{backgroundColor:"white"}
}))
 */

const Dialogalert= () => {

    const [open, setOpen] = useState(true)

    const history = useHistory()
    //const classes = useStyles()

    const handleClose = () => {
        setOpen(false)
        history.push('/Login')
    }

    return (

        <div>
            <Dialog
            open={open}
            onClose={handleClose} 
            aria-labelledby="alert-dialog-title"   
            //className={classes.paper}     
            >
                <DialogTitle id="alert-dialog-title">
                    Registration was Successful
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>

            </Dialog>
        </div>
    )



}

export default Dialogalert