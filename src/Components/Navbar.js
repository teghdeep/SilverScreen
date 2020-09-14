import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./Navbar.css";
import { Nav, NavDropdown } from "react-bootstrap";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Navbar() {
  const [show, handleShow] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(show);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div style={{ position: "fixed", right: "50px", width: "30px" }}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img
            className="nav__avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Netflix Logo"
          />
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          color="black"
        >
          <StyledMenuItem>
            {/* <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon> */}
            <ListItemText primary="Login" />
          </StyledMenuItem>
          <StyledMenuItem>
            {/* <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon> */}
            <ListItemText primary="Profile" />
          </StyledMenuItem>
          <StyledMenuItem>
            {/* <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon> */}
            <ListItemText primary="SignUp" />
          </StyledMenuItem>
          <StyledMenuItem>
            {/* <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon> */}
            <ListItemText primary="Logout" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
}

export default Navbar;
