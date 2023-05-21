import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations/contactsThunk';
import { getFilteredContacts } from 'redux/selectors/selectors';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  ContactsContainer,
  Item,
  Wrapper,
  Icon,
  Number,
  Button,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  return (
    <>
      <ContactsContainer>
        {contacts.map(item => (
          <Item key={item.id}>
            <Wrapper>
              <Icon>
                <FaUserAlt />
              </Icon>
              <p>{item.name}</p>
            </Wrapper>

            <Wrapper>
              <Number>{item.number}</Number>
              <Button
                type="Button"
                onClick={() => dispatch(deleteContactThunk(item.id))}
              >
                <FaTrash />
              </Button>
            </Wrapper>
          </Item>
        ))}
      </ContactsContainer>
    </>
  );
};
