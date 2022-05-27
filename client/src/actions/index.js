import {
  createMemory,
  removeMemory,
  updateMemory,
  searchMemories,
  getAll,
} from "./memories";

import { getMemoryItem, getRecommendItem } from "./memory";

export const memoriesActions = {
  get: getAll,
  create: createMemory,
  remove: removeMemory,
  update: updateMemory,
  search: searchMemories,
  getItem: getMemoryItem,
  getRecommend: getRecommendItem,
};
