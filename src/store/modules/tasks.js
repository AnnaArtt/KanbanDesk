export default {
  state: {
    tasks_array: [
      {
        _id: "1",
        titleTask: "To do task",
        idColumn: 0,
      },
      {
        _id: "2",
        titleTask: "To do task",
        idColumn: 0,
      },
      {
        _id: "3",
        titleTask: "To do task",
        idColumn: 0,
      },
      {
        _id: "4",
        titleTask: "In progress task",
        idColumn: 1,
      },
      {
        _id: "5",
        titleTask: "In progress task",
        idColumn: 1,
      },
      {
        _id: "6",
        titleTask: "In progress task",
        idColumn: 1,
      },
      {
        _id: "7",
        titleTask: "In progress task",
        idColumn: 1,
      },
      {
        _id: "8",
        titleTask: "Testing task",
        idColumn: 2,
      },
      {
        _id: "9",
        titleTask: "Testing task",
        idColumn: 2,
      },
      {
        _id: "10",
        titleTask: "Done task",
        idColumn: 3,
      },
    ],
  },
  getters: {
    getTasksArray(state) {
      console.log("return");
      return state.tasks_array;
    },
  },
  mutations: {
    changeIdColumn(state, { _id, idColumn }) {
      let task_for_change = state.tasks_array.find((task) => task._id == _id);
      console.log(task_for_change);
      task_for_change.idColumn = idColumn;
      console.log(task_for_change);

      console.log("change");
    },
    deleteTask(state, { _id }) {
      let id_delete_element = state.tasks_array.findIndex(
        (task) => task._id == _id
      );

      state.tasks_array.splice(id_delete_element, 1);

      console.log("del");
    },
    innerTask(state, { task, index }) {
      console.log(index);
      state.tasks_array.splice(index, 0, task);

      console.log("inner");
    },
  },
  actions: {},
};
