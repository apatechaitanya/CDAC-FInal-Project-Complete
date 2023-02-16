import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" className="bg-dark">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
              On Door Services   .  
              <img
                  src={logo}
                  className="d-inline-block align-top logo"
                  alt="psd logo"
                  height={40}
                />
            </Typography>
           

            
           
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Home
            </Button>

            {/* <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Contact
            </Button> */}

            {/* <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Login/Registration
            </Button> */}

            <Button
              component={NavLink}
              to="/service"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Services
            </Button>

            <div class="dropdown">
              <Button
                component={NavLink}
                to="/s"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </Button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                color="secondary"
                style={{ backgroundColor: "#ece4ed" }}
              >
                {/* <li> <a href="/admin" action>
                  <button style={{ textDecoration:"none"}} class="dropdown-item" type="button">
                    Admin
                  </button></a>
                </li> */}
                 <li>
                  <NavLink to="/AdminLogin" action>
                    <button class="dropdown-item" type="button">
                      Admin
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Login" action>
                    <button class="dropdown-item" type="button">
                      Customer
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/WorkerLogin" action>
                    <button class="dropdown-item" type="button">
                      Worker
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* <Button component={NavLink} to='/admin' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Admin</Button> */}
            <div class="dropdown">
              <Button
                component={NavLink}
                to="/serv"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "" : "" };
                }}
                sx={{ color: "white", textTransform: "none" }}
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register
              </Button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                color="secondary"
                style={{ backgroundColor: "#ece4ed" }}
              >
                {/* <li> <a href="/admin" action>
                  <button style={{ textDecoration:"none"}} class="dropdown-item" type="button">
                    Admin
                  </button></a>
                </li> */}
                <li>
                  <NavLink to="/customerReg" action>
                    <button class="dropdown-item" type="button">
                      Customer
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/AddWorker" action>
                    <button class="dropdown-item" type="button">
                      Worker
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
