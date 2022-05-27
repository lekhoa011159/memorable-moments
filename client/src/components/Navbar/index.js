import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import BookIcon from "@mui/icons-material/Book";
import SearchIcon from "@mui/icons-material/Search";
import { searchMemories } from "../../actions/memories";

const Navbar = (props) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchMemories = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      // TODO: Default is search title
      dispatch(searchMemories(`?title=${searchText.trim()}`));
    } else {
      dispatch(searchMemories());
    }
  };

  return (
    <AppBar color="inherit" position="static" sx={{ borderRadius: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container columns={12}>
            <Grid item xs={8}>
              <Grid container alignItems="center">
                <BookIcon sx={{ fontSize: "3rem" }} />
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
              </Grid>
            </Grid>

            <Grid item xs={4}>
              {/* <Box noValidate component="form" autoComplete="false">
                <Grid container alignItems="center" justifyContent="center">
                  <TextField
                    label="Remember your moment..."
                    type="search"
                    size="small"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <SearchIcon />
                </Grid>
              </Box> */}

              <FormControl variant="standard" size="small">
                <InputLabel htmlFor="outlined-adornment-password">
                  Search
                </InputLabel>
                <Input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearchMemories} edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
