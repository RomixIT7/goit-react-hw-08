import { createSelector } from "@reduxjs/toolkit";

import { selectItems } from "../contacts/selectors";

export const selectFilters = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilters],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
