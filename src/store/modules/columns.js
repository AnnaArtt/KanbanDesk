export default {
  state: {
    columns_array: [
      {
        _id: 0,
        title: "To do",
      },
      {
        _id: 1,
        title: "In progress",
      },
      {
        _id: 2,
        title: "Testing",
      },
      {
        _id: 3,
        title: "Done",
      },
    ],
  },
  getters: {
    getColumnsArray(state) {
      return state.columns_array;
    },
  },
  mutations: {},
  actions: {},
};
