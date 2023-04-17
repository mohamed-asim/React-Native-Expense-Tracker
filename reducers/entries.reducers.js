//Reducer creation
const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case "DELETE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;

    default:
      return state;
  }
};
export default reducer;
var initialEntries = [
  {
    id: 1,
    description: "House rent redux",
    value: 987,
    isExpense: true,
  },
  {
    id: 2,
    description: "Office income sdsadsadads",
    value: 3987,
    isExpense: false,
  },
];
