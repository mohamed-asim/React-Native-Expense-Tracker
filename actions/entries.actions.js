export const EntryAddRedux = (payload) => {
  return { type: "ADD_ENTRY", payload };
};
export const EntryDeleteRedux = (id) => {
  return { type: "DELETE_ENTRY", payload: { id } };
};
