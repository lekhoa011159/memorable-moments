import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fake loading for effect purpose
const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec));

export const searchMemories = createAsyncThunk(
  "memories/search",
  async (query = "") => {
    const { data } = await axios.get(
      `http://localhost:5000/apis/posts/v1${query}`
    );
    return data;
  }
);

export const removeMemory = createAsyncThunk(
  "memories/delete",
  async (query) => {
    if (query !== "") {
      const { status } = await axios.delete(
        `http://localhost:5000/apis/posts/v1?id=${query}`
      );
      await sleep(1500);
      if (status === 200) return query;
      return null;
    }
  }
);

export const getAll = createAsyncThunk("memories/get", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/apis/posts/v1");
    if (data && data.length > 0) await sleep(2000);
    return data;
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
});

export const createMemory = createAsyncThunk(
  "memories/create",
  async (post) => {
    const res = await axios.post("http://localhost:5000/apis/posts/v1", post);
    const { status, data } = res;

    if (status === 200) {
      await sleep(1500);
      return data;
    }

    return null;
  }
);

export const updateMemory = createAsyncThunk(
  "memories/update",
  async (post) => {
    const res = await axios.put("http://localhost:5000/apis/posts/v1", post);
    const { status } = res;

    if (status === 200) {
      await sleep(1500);
      return post;
    }

    return null;
  }
);
