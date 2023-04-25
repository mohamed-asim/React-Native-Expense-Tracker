export const EntryAddRedux = (payload) => {
  return { type: "ADD_ENTRY", payload };
};
export const EntryDeleteRedux = (id) => {
  return { type: "DELETE_ENTRY", payload: { id } };
};

export const UpdateEntryRedux = (id, entry) => {
  return { type: "UPDATE_ENTRY", payload: { id, entry } };
};
