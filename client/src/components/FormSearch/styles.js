const sx = {
  TypographyFormHeader: {
    fontFamily: "Commissioner, sans-serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "inherit",
    textDecoration: "none",
  },

  BoxFormFlex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: (theme) => theme.spacing(1),
    },
  },

  PaperContainer: {
    padding: (theme) => theme.spacing(1),
    mb: (theme) => theme.spacing(2),
  },
};

export default sx;
