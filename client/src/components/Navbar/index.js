import React from "react";
import { Container, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

const Navbar = (props) => {
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
