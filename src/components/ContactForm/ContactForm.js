import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = ({ target }) => {
    setName(target.value.trimLeft());
  };

  const handleNumberChange = ({ target }) => {
    setNumber(target.value.trimLeft());
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (name === '') {
      alert('Name required');
      return;
    }
    if (number === '') {
      alert('Name required');
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleOnSubmit}>
      <div className={s.formField}>
        <label className={s.formLabel}>Name</label>
        <input
          className={s.formInput}
          type="text"
          placeholder=""
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className={s.formField}>
        <label className={s.formLabel}>Number</label>
        <input
          className={s.formInput}
          type="text"
          placeholder=""
          name="number"
          value={number}
          onChange={handleNumberChange}
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}
