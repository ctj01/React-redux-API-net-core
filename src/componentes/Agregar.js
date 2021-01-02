import {Avatar, Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face';
const styles = makeStyles({
    label: {
        margin: '10px'
    },
    logo:{
        color: '#11698e',
        fontSize: '100px'
    },
    grid:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    form:{
        width: '100%'
    },
    submit:{
        background: '#11698e',
        color: 'white',
        marginLeft: '10px'
    }
})


const Agregar  = () => {

    const classes = styles()

return(
<Container component={"main"} maxWidth={"xs"}>
    <div className={classes.grid}>
         <FaceIcon className={classes.logo}/>
         <Typography variant="h5">Agregar Usuario</Typography>  
            <form className={classes.form}>
                <Grid>
                    <Grid item>
                        <TextField name="name" 
                        variant="outlined"
                        label="Ingrese su nombre" className={classes.label} 
                        fullWidth>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField fullWidth
                        className={classes.label} name="age" 
                        variant="outlined"
                        label="Ingrese su edad">
                        </TextField>
                    </Grid>
                    <Grid item>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    >Registrar
                    </Button>
                    </Grid>
                </Grid>
            </form>
    </div>

</Container>

)}
export default Agregar;
