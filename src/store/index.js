import { createStore } from "vuex";
import Tasks from "./modules/tasks.js";
import Columns from "./modules/columns.js";

export default createStore({
  modules: {
    Tasks,
    Columns,
  },
});
