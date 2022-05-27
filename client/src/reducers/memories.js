import { createSlice } from "@reduxjs/toolkit";
import { memoriesActions } from "../actions";
import memoriesBuilder from "../actions/memories.builders";

const { create, get, remove, search, update } = memoriesActions;

const initialState = {
  list: [],
  loading: true,
  error: null,
};

const memoriesSlice = createSlice({
  name: "memories",
  initialState,
  extraReducers(builder) {
    builder
      // create builder
      .addCase(create.pending, memoriesBuilder.create.pending)
      .addCase(create.fulfilled, memoriesBuilder.create.fulfilled)
      .addCase(create.rejected, memoriesBuilder.create.rejected)

      // getall builder
      .addCase(get.pending, memoriesBuilder.get.pending)
      .addCase(get.fulfilled, memoriesBuilder.get.fulfilled)
      .addCase(get.rejected, memoriesBuilder.get.rejected)

      // remove builder
      .addCase(remove.pending, memoriesBuilder.remove.pending)
      .addCase(remove.fulfilled, memoriesBuilder.remove.fulfilled)
      .addCase(remove.rejected, memoriesBuilder.remove.rejected)

      // search builder
      // .addCase(search.pending, memoriesBuilder.search.pending)
      // .addCase(search.fulfilled, memoriesBuilder.search.fulfilled)
      // .addCase(search.rejected, memoriesBuilder.search.rejected)

      // update builder
      .addCase(update.pending, memoriesBuilder.update.pending)
      .addCase(update.fulfilled, memoriesBuilder.update.fulfilled)
      .addCase(update.rejected, memoriesBuilder.update.rejected);
  },
});

export default memoriesSlice.reducer;
