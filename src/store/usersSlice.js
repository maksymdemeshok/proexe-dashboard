import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    const response = await fetch(
      "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    );

    if (!response.ok) {
      throw new Error("Server error");
    }
    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {
    addNewUser(state, action) {
      state.users.push({
        name: action.payload.name,
        email: action.payload.email,
        id: Date.now(),
        username: "Default Username",
        address: {
          city: "Default City",
        },
      });
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    sortUsers(state) {
      function compare(a, b) {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      }
      state.users.sort(compare);
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.users = action.payload;
    },
  },
});

export const { addNewUser, deleteUser, sortUsers } = usersSlice.actions;

export default usersSlice.reducer;
