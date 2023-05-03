const types = {
  ADD_ENTRY: "ADD_ENTRY",
  DELETE_ENTRY: "DELETE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
};

export default types;

export const EntryAddRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};
export const EntryDeleteRedux = (id) => {
  return { type: types.DELETE_ENTRY, payload: { id } };
};

export const UpdateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};
