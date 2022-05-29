import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Avatar,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

import sx from "./styles";
import ModalSearch from "./ModalSearch";
import CONSTANTS from "./consts";
import { getAll } from "../../actions/memories";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogToggle] = useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleBindingSearchHotkey);

    return () => {
      document.removeEventListener("keydown", handleBindingSearchHotkey);
    };
  }, []);

  const handleBindingSearchHotkey = (evt) => {
    if ((evt.key === "k" || evt.key === "K") && evt.ctrlKey) {
      evt.preventDefault();
      evt.stopPropagation();
      setDialogToggle(true);
    }
  };

  const handleClickSetting = () => {
    console.log("setting");
  };

  const handleUserLogin = () => {
    console.log("Login");
  };

  const handleCloseDialog = () => {
    setDialogToggle(false);
  };

  const showDialogSearch = () => {
    setDialogToggle(true);
  };

  const handleConfirmSearch = (search) => {
    try {
      dispatch(getAll(search));
      props.onChangeSearch(search);
      setDialogToggle(false);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const callbackHandler = (actionType, value) => {
    switch (actionType) {
      case CONSTANTS.CHANGE_TEXT_SEARCH:
        props.onChangeSearch(value);
        break;
      case CONSTANTS.CLOSE_DIALOG:
        handleCloseDialog();
        break;
      case CONSTANTS.CONFIRM_SEARCH:
        handleConfirmSearch(value);
        break;
      default:
        console.log(
          `Default case: actionType - ${actionType}, value - ${value}`
        );
        return;
    }
  };

  const renderLeftsideNavbar = () => {
    return (
      <Grid item xs={8}>
        <Grid container alignItems="center">
          {/* <BookIcon sx={{ fontSize: "3rem" }} /> */}
          <Typography
            noWrap
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEMORIES MOMENT
          </Typography>

          {/* <div>
            <img src="/Logo.png" alt="Logo" />
          </div> */}
        </Grid>
      </Grid>
    );
  };

  const renderRightsideNavbar = () => {
    return (
      <Grid item xs={4} sx={{ alignSelf: "center" }}>
        <Grid container justifyContent="space-evenly" alignItems="center">
          {props.isSearchbarShow && (
            <Button
              color="secondary"
              variant="outlined"
              onClick={showDialogSearch}
              sx={sx.SearchButton}
            >
              <Box sx={sx.SearchPlaceholder}>
                <SearchIcon />
                <Typography variant="body2">Search...</Typography>
              </Box>
              <div id="hotkey-search" style={sx.HotkeySearch}>
                Ctrl + K
              </div>
            </Button>
          )}

          {/* <IconButton sx={sx.Icon
          Button} onClick={handleUserLogin}>
            <Avatar alt="fallbackImg" sx={{ width: 24, height: 24 }} />
          </IconButton> */}
          {/* <IconButton
            size="small"
            sx={sx.IconButton}
            onClick={handleClickSetting}
          >
            <SettingsIcon />
          </IconButton> */}
        </Grid>
      </Grid>
    );
  };

  return (
    <div onKeyUp={handleBindingSearchHotkey}>
      <AppBar color="inherit" position="static" sx={{ borderRadius: 2 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container columns={12}>
              {renderLeftsideNavbar()}
              {renderRightsideNavbar()}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <ModalSearch callbackHandler={callbackHandler} isOpen={dialogOpen} />
    </div>
  );
};

export default Navbar;
