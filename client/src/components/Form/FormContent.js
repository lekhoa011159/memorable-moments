import React from "react";
import { TextField, Box } from "@mui/material";
import PropTypes from "prop-types";
import FileBase64 from "react-file-base64";

import sx from "./styles";
import CONST from "./const";

const FormContent = (props) => {
  const { title, content, tags, creator, callbackHandler } = props;

  const handleChange = (changeType) => (e) => {
    callbackHandler(changeType, e.target.value);
  };

  const handleUploadFile = ({ base64 }) => {
    callbackHandler(CONST.ADD_THUMBNAIL, base64);
  };

  return (
    <>
      <TextField
        fullWidth
        size="small"
        label="Creator"
        variant="outlined"
        value={creator}
        onChange={handleChange(CONST.CHANGE_AUTHOR)}
      />

      <TextField
        fullWidth
        size="small"
        label="Title"
        variant="outlined"
        value={title}
        onChange={handleChange(CONST.CHANGE_TITLE)}
      />
      <TextField
        multiline
        fullWidth
        size="small"
        rows={4}
        variant="outlined"
        label="What happened..."
        value={content}
        onChange={handleChange(CONST.CHANGE_CONTENT)}
      />
      <TextField
        fullWidth
        label="Tags"
        size="small"
        variant="outlined"
        value={tags}
        onChange={handleChange(CONST.CHANGE_TAGS)}
      />

      <Box sx={sx.BoxFormFileBase}>
        <FileBase64 multiple={false} onDone={handleUploadFile} />
      </Box>
    </>
  );
};

FormContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  tags: PropTypes.string,
  callbackHandler: PropTypes.func,
  creator: PropTypes.string,
};

FormContent.defaultProps = {
  creator: "",
  title: "",
  content: "",
  tags: "",
  callbackHandler: () => {},
};

export default FormContent;
