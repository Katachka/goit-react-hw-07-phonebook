import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors/selectors';
import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <Label>
        <Text>Find contacts by name</Text>
        <Input type="text" value={filter} onChange={showFilteredContacts} />
      </Label>
    </div>
  );
};
