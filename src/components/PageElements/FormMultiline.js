import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '150ch',
      },
    },
  }));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
    <div>
        <h4>Name:</h4>
        <TextField
            id="filled-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder=""
            helperText="Your Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
        />
        <h4>Email:</h4>
        <TextField
            id="filled-full-width"
            label="Email"
            style={{ margin: 8 }}
            placeholder=""
            helperText="Your Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
        />
        <h4>Message</h4>
        <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={10}
            defaultValue=""
            variant="filled"
        />
      </div>
    </form>
  );
}