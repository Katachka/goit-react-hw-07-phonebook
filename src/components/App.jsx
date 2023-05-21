import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/operations/contactsThunk';
// import { selectContacts } from 'redux/selectors/selectors';
import { Container, Title, Subtitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const users = useSelector(selectContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
