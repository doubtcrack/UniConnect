import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { filterAds, searchFilter } from "../redux/ads/adsSlice";
import { resetUser } from "../redux/auth/authSlice";

import profile from "../images/profile.png";
import logo from "../images/uniconnect_t.png";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SellIcon from "@mui/icons-material/Sell";

function Header() {
  const [value, setValue] = useState(null);
  const [input, setInput] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ad_location = useLocation();
  const { user } = useSelector((select) => select.auth);
  useEffect(() => {
    if (value || value !== null) {
      dispatch(filterAds(value));
    }
  }, [dispatch, value]);

  useEffect(() => {
    dispatch(searchFilter(input));
  }, [dispatch, input]);

  const logout = () => {
    localStorage.clear();
    dispatch(resetUser());
    navigate("/");
  };

  const handleSellBtnClick = () => {
    if (!user) {
      toast.error("To post Ad, Please login");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = (e) => {
    setValue(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" style={{ height: "80px" }}>
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} width={200} height={70} alt="logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{ flex: 1 }}>
            <div style={{ width: "50%" }}>
              {/* <GooglePlacesAutocomplete
                selectProps={{
                  value,
                  onChange: setValue,
                }}
                autocompletionRequest={{
                  componentRestrictions: { country: ["in"] },
                }}
              /> */}
              <Form.Select onChange={location}>
                <option value="Delhi Technological University(DTU)">
                  Delhi Technological University(DTU)
                </option>
                <option value="Netaji Subhas Institute of Technology(NSIT)">
                  Netaji Subhas Institute of Technology(NSIT)
                </option>
                <option value="Indra Gandhi Delhi Technological University for Women(IGDTUW)">
                  Indra Gandhi Delhi Technological University for Women(IGDTUW)
                </option>
                <option value="Indraprastha Institude of Information Technology Delhi(IIITD)">
                  Indraprastha Institude of Information Technology Delhi(IIITD)
                </option>
                <option value="Indian Institude of Technology Delhi(IIT)">
                  Indian Institude of Technology Delhi(IIT)
                </option>
              </Form.Select>
            </div>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!user && (
              <>
                <NavLink className="nav-link" to="/signin">
                  <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    style={{
                      borderRadius: 35,
                      transition: "0.4s",
                      boxShadow: "0 3px 5px 2px rgba(252, 252, 252, 100)",
                      backgroundImage:
                        "linear-gradient(45deg, #f5793b, #ffab00)",
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  <Button
                    variant="contained"
                    startIcon={<AccountCircleIcon />}
                    style={{
                      borderRadius: 35,
                      transition: "0.4s",
                      boxShadow: "0 3px 5px 2px rgba(252, 252, 252, 100)",
                      backgroundImage:
                        "linear-gradient(45deg, #f5793b, #ffab00)",
                    }}
                  >
                    Register
                  </Button>
                </NavLink>
              </>
            )}

            {user && (
              <div style={{ marginLeft: "1rem" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={user.picture ? user.picture : profile}
                  onClick={handleClick}
                  style={{ background: "none", cursor: "pointer" }}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    ".MuiPaper-root": {
                      width: "20%",
                      padding: "1rem",
                      left: "auto !important",
                      right: "150px",
                    },
                  }}
                >
                  <div className="d-flex">
                    <img
                      src={user.picture ? user.picture : profile}
                      width={50}
                      height={50}
                      alt="profile"
                      style={{ borderRadius: "50%" }}
                    />

                    <div className="d-flex flex-column ps-2">
                      <span>Hello</span>
                      <span style={{ fontWeight: "bold" }}>
                        {user.fullname}
                      </span>
                      <Link to="/" style={{ color: "black" }}>
                        view and edit profile
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <Link
                    to="/myads"
                    className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root"
                    style={{
                      color: "#333",
                      padding: "6px 16px",
                      textDecoration: "none",
                    }}
                  >
                    My Ads
                  </Link>
                  <MenuItem to="/" onClick={logout}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}

            <NavLink
              className="nav-link ms-2"
              to="/post"
              onClick={handleSellBtnClick}
            >
              <Tooltip title="Sell">
                {/* <IconButton> */}
                <Avatar
                  style={{
                    borderRadius: 35,
                    transition: "0.4s",
                    boxShadow: "0 3px 5px 2px rgba(252, 252, 252, 100)",
                    backgroundImage: "linear-gradient(45deg, #888888, #b5b5b5)",
                  }}
                >
                  <SellIcon />
                </Avatar>
                {/* </IconButton> */}
              </Tooltip>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
