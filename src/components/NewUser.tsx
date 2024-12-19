import * as React from 'react';
import { initialData } from '../data/default';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import { toast } from "sonner"



export default function NewUser() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({
    name: '',
    age: '',
    leaguesPlayed: [],
    status: '',
    height: '',
    position: '',
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLeaguesChange = (event) => {
    const {
      target: { value },
    } = event;
    setUser({
      ...user,
      leaguesPlayed: typeof value === 'string' ? value.split(',') : value,
    });
  };

  function handleSubmit() {
    toast.success('Success, The User have been Added!');
    initialData.push(user);
    console.log(initialData);
  }

  const names = ["Premier League", "La Liga", "Serie A", "Saudi Pro League"];

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ margin: '20px' }}>
        New
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        sx={{
          '.MuiDialog-paper': {
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#4052d6' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add New User
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: '20px', marginBottom: '15px', maxWidth: '500px',margin: '0 auto' }}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />

          <TextField
            id="age"
            label="Age"
            type="number"
            variant="standard"
            name="age"
            value={user.age}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />

          <FormControl fullWidth sx={{ marginBottom: '15px' }}>
            <InputLabel id="demo-multiple-chip-label" >Leagues Played</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              name="leagues"
              value={user.leaguesPlayed}
              onChange={handleLeaguesChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="status"
            label="Status"
            variant="standard"
            name="status"
            value={user.status}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            id="height"
            label="Height"
            variant="standard"
            name="height"
            value={user.height}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            id="position"
            label="Position"
            variant="standard"
            name="position"
            value={user.position}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />
        </Box>
      </Dialog>
    </>
  );
}
