// import logo from './logo.svg';
// import './App.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   Link
// } from "react-router-dom";

// import PathFinder from './games/PathFind/PathFind';
// import Astar from './games/AI/Astar_canvas'
// import {default as Scene} from './games/AI/Astar_canvas'
import { default as Scene } from './games/AI/phy'
// import { AppBar, ButtonGroup, Button } from '@mui/material';
import { AppBar, Box, Button, Card, CardContent, Link, CardMedia, CardActionArea, Grid, Toolbar, Typography, IconButton } from '@mui/material';


var homePath = '/game_site'
export default function App() {
  // useNavigate(homePath);
  return (

    <>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      {/* <Box > */}
        <AppBar enableColorOnDark={true} position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Saketh Getla
            </Typography>
            {/* <Button component={Link} to={'https://sakethgetla.github.io'} color="inherit"> */}
            {/* <Button color="inherit" > */}
            <Button color="inherit"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://sakethgetla.github.io"
              }} >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Projects
              </Typography>
            </Button>
            {/* <Button component={Link} to={'/about'} color="inherit"> */}
            {/* <Button color="inherit"> */}
            {/*   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
            {/*     About */}
            {/*   </Typography> */}
            {/* </Button> */}
            {/* <Button component={Link} to={'/about'} variant="outlined" color="inherit" >About</Button> */}
            {/* <Link to="/about" color="inherit"> */}
            {/*   <Button variant="outlined" color="inherit" >About</Button> */}
            {/* </Link> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      {/* </Box> */}


      <Scene />
    </>
  );
}


function Home() {
  console.log('home')
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
