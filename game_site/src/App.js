// import logo from './logo.svg';
// import './App.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import PathFinder from './games/PathFind/PathFind';
// import Astar from './games/AI/Astar_canvas'
import {default as Scene} from './games/AI/Astar_canvas'
import { AppBar, ButtonGroup, Button } from '@mui/material';


var homePath = '/game_site'
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <AppBar position='static'>
              <ButtonGroup variant="" size="large">

                <Link to={homePath + "/"}>
                  <Button variant="contained">
                    Home
                  </Button>
                </Link>

                <Link to={homePath + "/about"}>
                  <Button variant="contained">
                    about
                  </Button>
                </Link>
                <Link to={homePath + "/users"}>
                  <Button variant="contained">
                    users
                  </Button>
                </Link>

                <Link to={homePath + "/scene"}>
                  <Button variant="contained">
                    Scene
                  </Button>
                </Link>

                <Link to={homePath + "/pathFinder"}>
                  <Button variant="contained">
                    Path finding
                  </Button>
                </Link>

              </ButtonGroup>
            </AppBar>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path={homePath + "/about"} element={<About />} />
          <Route path={homePath + "/users"} element={<Users />} />
          <Route path={homePath + "/"} element={<Home />} />
          <Route path={homePath + "/pathFinder"  }element={<PathFinder />} />
          <Route path={homePath + "/scene"  }element={<Scene />} />
        </Routes>
      </div>
    </Router>
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
