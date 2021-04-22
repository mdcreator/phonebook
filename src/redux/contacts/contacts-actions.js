import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
