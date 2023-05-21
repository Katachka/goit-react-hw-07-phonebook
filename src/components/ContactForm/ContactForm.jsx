import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContactThunk } from 'redux/operations/contactsThunk';
import { Form, Label, Span, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Report.warning(
        `${name}`,
        'This user is already in the contact list.',
        'OK'
      );
    }

    dispatch(addContactThunk(newObj));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          onChange={onChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <Span>Number</Span>
        <Input
          onChange={onChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
