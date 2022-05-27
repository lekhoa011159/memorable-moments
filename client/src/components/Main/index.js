import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { memoriesActions } from "../../actions";
import { Container, Grid, Grow } from "@mui/material";
import Form from "../Form";
import FormSearch from "../FormSearch";
import Moments from "../Moments";
import CreatedStatusSnackbar from "./Snackbar";

const Main = () => {
  const dispatch = useDispatch();
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState("success");
  const [snackbarAction, setSnackbarAction] = useState("");

  useEffect(() => {
    dispatch(memoriesActions.get());
  }, [dispatch]);

  const handleEditMemory = (item) => {
    setSelectedMemory(item);
  };

  const callbackHandler = (actionType, value) => {
    switch (actionType) {
      case "TOGGLE":
        handleValidateSnackbarStatus(value);
        break;
      case "EDIT_MEMORY":
        handleEditMemory(value);
        break;
      default:
        console.log(`default Case, your actionType is: ${actionType}`);
        return;
    }
  };

  const handleValidateSnackbarStatus = ({ open, type, status }) => {
    setSnackbarOpen(open);
    setSnackbarAction(type);
    setSnackbarStatus(status);

    if (type === "CLOSE") {
      setSnackbarAction("");
      setSnackbarOpen(false);
    }
  };

  return (
    <Grow in>
      <Container sx={{ marginTop: (theme) => theme.spacing(2), padding: 0 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          columns={12}
        >
          <Grid item xs={8}>
            <Moments callbackHandler={callbackHandler} />
          </Grid>
          <Grid item xs={4}>
            <FormSearch />
            <Form
              callbackHandler={callbackHandler}
              selectedMemory={selectedMemory}
            />
          </Grid>
        </Grid>

        <CreatedStatusSnackbar
          isOpen={isSnackbarOpen}
          snackbarAction={snackbarAction}
          callbackHandler={callbackHandler}
          status={snackbarStatus}
        />
      </Container>
    </Grow>
  );
};

export default Main;
