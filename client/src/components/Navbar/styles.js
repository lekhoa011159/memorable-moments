import { createTheme } from "@mui/material/styles";
import green from "@mui/material/colors/green";

export const theme = createTheme({
  palette: {
    primary: { main: green["A700"] },
  },
});

const sx = {
  IconButton: {
    padding: "5px",
    border: "1px solid",
    borderRadius: (theme) => theme.spacing(1),
  },

  SearchButton: {
    textTransform: "none",
    justifyContent: "space-between",
    minWidth: 200,
    borderRadius: "12px !important",
    padding: "5px",
    "& #hotkey-search": {
      padding: "0 5px !important",
      border: (theme) => `1px solid ${theme.palette.secondary.main}`,
      borderRadius: (theme) => theme.spacing(1),
    },
  },

  SearchPlaceholder: {
    display: "flex",
    alignItems: "center",
  },
};

export default sx;
