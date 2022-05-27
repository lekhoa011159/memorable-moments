import React, { useState } from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import sx from "./styles";
import CONSTANTS from "./const";

const FormSearch = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const callbackHandler = (actionType, value) => {
    switch (actionType) {
      case CONSTANTS.SEARCH_MEMORIES:
        handleSearchMemories();
        break;
      default:
        console.log(
          `callbackHandler with default case: ${actionType}, value: ${value}`
        );
        return;
    }
  };

  const handleSearchMemories = () => {
    // dispatch(searchMemories(searchText.trim()));
    console.log(searchText.trim());
  };

  const isDisabledCreateBtn = () => {
    return searchText.trim() === "";
  };

  return (
    <Paper sx={sx.PaperContainer} elevation={24}>
      <Box component="form" noValidate autoComplete="off" sx={sx.BoxFormFlex}>
        <Typography variant="h6" sx={sx.TypographyFormHeader}>
          SEARCH YOUR MEMORIES
        </Typography>

        <TextField
          fullWidth
          size="small"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          disabled={isDisabledCreateBtn()}
          sx={{ margin: (theme) => theme.spacing(1) }}
          onClick={handleSearchMemories}
        >
          CONFIRM
        </Button>
      </Box>
    </Paper>
  );
};

export default FormSearch;
