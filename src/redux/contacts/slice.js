import { createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, fetchContacts } from "./operations";

const CONTACTS_INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const contactIndex = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(contactIndex, 1);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
